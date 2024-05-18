import { AxiosRequestConfig, Method } from 'axios'

export type AxiosBaseQueryFnArgs = {
  url: string
  method: Method
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
}
