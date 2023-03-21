import { IResponseBodyWithData } from "../../../typings/global";

export const isErrorResponse = (response: IResponseBodyWithData) => !!response.error || !response.data;

export const getResponseErrorMessage = (response: IResponseBodyWithData) => response.error || 'Something went wrong.';
