import {
  AUTHORIZATION_HEADER,
  MANO_PRODUCTS_API,
  STORE_ID,
  USER_ADDRESS_ID,
} from '@env'
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

import { axiosBaseQuery } from '../../axiosBaseQuery'
import { getAllProductsReq } from './endpoints/getAllProducts'
import { getProductWithIdReq } from './endpoints/getProductWithId'

export const productsApi = axios.create({
  baseURL: MANO_PRODUCTS_API,
})

productsApi.interceptors.request.use((req) => {
  req.headers.Authorization = AUTHORIZATION_HEADER
  req.headers.StoreID = STORE_ID
  req.headers.UserAddressID = USER_ADDRESS_ID
  return req
})

export const products = createApi({
  reducerPath: 'products',
  baseQuery: axiosBaseQuery({ api: productsApi }),
  endpoints: (build) => ({
    getAllProducts: getAllProductsReq(build),
    getProductWithId: getProductWithIdReq(build),
  }),
})

export const { useGetAllProductsQuery, useGetProductWithIdQuery } = products
