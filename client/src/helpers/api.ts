import Axios, { AxiosResponse, AxiosInstance, Method, AxiosRequestConfig } from 'axios';
import * as _ from 'lodash';
import Cookie from 'cookie';
import { IResponseBody } from '../../../typings/global';

interface IRequestConfig {
  method?: Method;
  data?: object;
  axios?: AxiosRequestConfig;
}

export default class ApiService {

  protected static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  protected static axios: AxiosInstance = Axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  public static async call<T extends IResponseBody>(path: string, config: IRequestConfig = {}): Promise<T> {
    const fullPath = 'http://localhost:3000' + path;
    try {
      const response = await this.request<T>(fullPath, config);
      await this.sleep(1000);
      return response.data;
    } catch (error) {
      return { error } as T;
    }
  }

  public static async request<T extends IResponseBody>(path: string, config: IRequestConfig = {}): Promise<AxiosResponse<T>> {
    const cookies = Cookie.parse(document.cookie);
    const requestConfig: AxiosRequestConfig = _.cloneDeep(config.axios || {});

    requestConfig.url = path;
    requestConfig.headers = requestConfig.headers || {};
    requestConfig.method = config.method || 'GET';
    requestConfig.data = config.data || {};

    if (cookies.crumb) {
      requestConfig.headers['X-CSRF-Token'] = cookies.crumb;
    }

    return this.axios.request<T>(requestConfig);
  }
}
