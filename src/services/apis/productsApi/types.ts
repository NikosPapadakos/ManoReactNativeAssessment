type Attachment = {
  id: number
  sort_order: number | null
  attachment_type: string
  class_name: string
  created_at: string
  thumbnail: string
  large: string
  small: string
  extra_small: string
  original: string
  extra_props: {
    identified: boolean
  }
}

type Category = {
  id: number
  parent_category_id: number
  title: string
  category_type: string
  class_name: string
  created_at: string
  images: Array<Attachment>
}

export type Product = {
  id: number
  title: string
  brand: string | null
  sap_id: string
  sku: string
  class_name: string
  created_at: string
  favorite: boolean
  categories: Array<Category>
  original_price: string
  discounted_price: string
  price: string
  quantity: number
  max_allowed_quantity: number
  shelf_zone: string
  shelf_section: string
  storage_shelf_zone: string
  storage_shelf_section: string
  sap_quantity: number
  store_id: number
  tax_percentage: string
  properties: Array<unknown>
  url: string
  store_product_id: number
  images: Array<Attachment>
}

type RequestData = {
  started_at: string
  ended_at: string
}

type ApiResponse = {
  success: boolean
  code: string
  message: string | null
  request_data: RequestData
}

export type AllProductsResponse = ApiResponse & {
  items: Array<Product>
}
export type ProductFromIdResponse = ApiResponse & {
  data: Product
}
