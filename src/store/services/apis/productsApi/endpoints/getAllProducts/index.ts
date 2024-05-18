import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn } from '@reduxjs/toolkit/query'

import { AllProductsResponse } from '../../types'

export const getAllProductsReq = (
  build: EndpointBuilder<BaseQueryFn, string, string>
) =>
  build.query<AllProductsResponse, void>({
    query: () => ({
      method: 'POST',
    }),
  })
