import { AllProductsResponse } from '../../types'

export const MOCK_PRODCUTS_RES: AllProductsResponse = {
  success: true,
  items: [
    {
      id: 12199,
      title: '12 SPICES KILISHI 150G',
      brand: null,
      sap_id: '111995',
      sku: '6156000133256',
      class_name: 'Product',
      created_at: '2023-08-15T07:23:53.560Z',
      favorite: false,
      categories: [
        {
          id: 724,
          parent_category_id: 632,
          title: 'NAIJA SNACKS',
          category_type: 'normal',
          class_name: 'Category',
          created_at: '2022-09-19T15:29:46.995Z',
          images: [
            {
              id: 15859,
              sort_order: null,
              attachment_type: 'other',
              class_name: 'Attachment',
              created_at: '2023-03-30T13:45:11.628Z',
              thumbnail:
                'https://cdn.manoapp.com/variants/pgrulvem09hem21mmr7he6vcjga8/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
              large:
                'https://cdn.manoapp.com/variants/pgrulvem09hem21mmr7he6vcjga8/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
              small:
                'https://cdn.manoapp.com/variants/pgrulvem09hem21mmr7he6vcjga8/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
              extra_small:
                'https://cdn.manoapp.com/variants/pgrulvem09hem21mmr7he6vcjga8/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
              original: 'https://cdn.manoapp.com/pgrulvem09hem21mmr7he6vcjga8',
              extra_props: {
                identified: true,
              },
            },
          ],
        },
      ],
      original_price: '3399.0',
      discounted_price: '0.0',
      price: '3399.0',
      quantity: 14,
      max_allowed_quantity: 0,
      shelf_zone: 'D',
      shelf_section: '61',
      storage_shelf_zone: 'C',
      storage_shelf_section: '1',
      sap_quantity: 16,
      store_id: 7,
      tax_percentage: '7.5',
      properties: [],
      url: 'https://staging-app.manoapp.com/en/products/12199-12-spices-kilishi-150g',
      store_product_id: 50474,
      images: [
        {
          id: 21312,
          sort_order: null,
          attachment_type: 'other',
          class_name: 'Attachment',
          created_at: '2023-08-15T07:26:03.396Z',
          thumbnail:
            'https://cdn.manoapp.com/variants/sbbrbevkg7zvrof63ae52q2r4smb/cfac2cf5e20fe7457efd3f809e7f27e58f4ea9095af3b17038d0c3ad02cc7e81',
          large:
            'https://cdn.manoapp.com/variants/sbbrbevkg7zvrof63ae52q2r4smb/591fe3429fa59bfe054d222d66110883129e394e673fe4d32f213228e05dd59e',
          small:
            'https://cdn.manoapp.com/variants/sbbrbevkg7zvrof63ae52q2r4smb/29a9bad9089cbe7b09bf93243050556c68653f44594116934458f7b3fef584f1',
          extra_small:
            'https://cdn.manoapp.com/variants/sbbrbevkg7zvrof63ae52q2r4smb/ea9a7d4c7468d9b785648f365f677f63cd0998f6c26a543d0fc3633ba5df015d',
          original: 'https://cdn.manoapp.com/sbbrbevkg7zvrof63ae52q2r4smb',
          extra_props: {
            identified: true,
          },
        },
      ],
    },
  ],
  code: 'ok',
  message: null,
  request_data: {
    started_at: '2024-05-17T02:15:15.673+00:00',
    ended_at: '2024-05-17T02:16:35.774+00:00',
  },
}
