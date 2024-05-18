import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn } from '@reduxjs/toolkit/query'

import { Product, ProductFromIdResponse } from '../../types'

export const getProductWithIdReq = (
  build: EndpointBuilder<BaseQueryFn, string, string>
) =>
  build.query<ProductFromIdResponse, Product['id']>({
    query: (id) => ({
      url: `/${id}`,
      method: 'GET',
    }),
  })
