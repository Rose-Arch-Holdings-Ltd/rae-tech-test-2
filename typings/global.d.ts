declare global {
  export type Dictionary<T> = { [key: string]: T; };
}

export type Dictionary<T> = { [key: string]: T; };

export interface IResponseBody {
  statusCode?: number;
  error?: string;
  message?: string;
}

export interface IResponseBodyWithData extends IResponseBody {
  data?: any;
}
