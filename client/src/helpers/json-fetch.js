// eslint-disable-next-line no-redeclare
/* global window, document */

import Cookie from 'cookie';
import Qs from 'qs';
import Xhr from 'xhr';

export const JsonFetch = function (options, callback) {

    const cookies = Cookie.parse(document.cookie);
    const config = {
        url: options.url,
        method: options.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (cookies.crumb) {
        config.headers['X-CSRF-Token'] = cookies.crumb;
    }

    if (options.query) {
        config.url += '?' + Qs.stringify(options.query);
    }

    if (options.data) {
        config.body = JSON.stringify(options.data);
    }

    Xhr(config, (err, response, body) => {

        if (err) {
            return callback(err);
        }

        if (response.statusCode >= 200 && response.statusCode < 300) {
            if (response.headers.hasOwnProperty('x-auth-required')) {
                if (window.location.pathname === '/login') {
                    return callback(Error('Auth required.'));
                }

                let returnUrl = window.location.pathname;

                if (window.location.search.length > 0) {
                    returnUrl += window.location.search;
                }

                returnUrl = encodeURIComponent(returnUrl);

                window.location.href = `/login?returnUrl=${returnUrl}`;
            } else {
                callback(null, JSON.parse(body));
            }
        } else {
            const httpErr = new Error(response.rawRequest.statusText);

            callback(httpErr, JSON.parse(body));
        }
    });
};


if (global.window) {
    window.jsonFetch = JsonFetch;
}
