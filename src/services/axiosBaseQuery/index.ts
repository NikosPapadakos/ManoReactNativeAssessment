import { BaseQueryFn } from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosInstance } from 'axios'

import { AxiosBaseQueryFnArgs } from './types'

export const axiosBaseQuery =
  ({
    api,
  }: {
    api: AxiosInstance
  }): BaseQueryFn<AxiosBaseQueryFnArgs, unknown, unknown> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url,
        method,
        data: data as unknown,
        params: params as unknown,
        headers,
      })

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      }
    }
  }
