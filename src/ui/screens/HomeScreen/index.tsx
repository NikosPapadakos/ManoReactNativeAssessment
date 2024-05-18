import React from 'react'
import { RefreshControl } from 'react-native'

import { useGetAllProductsQuery } from '@store/services/apis/productsApi'
import { Product } from '@store/services/apis/productsApi/types'
import { SPACES, Spacer } from '@theme'

import { ProductCard } from '../../components/ProductCard'
import { ListHeaderComponent } from './components/ListHeaderComponent'
import { StoreFloatingButton } from './components/StoreFloatingButton'
import { List, StyledSafeArea } from './styles'
import { ProductOrNull, ProductsArray } from './types'
import { filterProductsByTitle } from './utils'

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const [products, setProducts] = React.useState<ProductsArray>(
    Array(20).fill(null)
  )

  const { data, isFetching, isLoading, error, refetch } =
    useGetAllProductsQuery()

  React.useEffect(() => {
    if (isFetching || isLoading) return
    setProducts(data?.data?.items ?? [])
  }, [data, isFetching, isLoading, error])

  return (
    <StyledSafeArea>
      <ListHeaderComponent query={searchQuery} setQuery={setSearchQuery} />
      <List
        showsVerticalScrollIndicator={false}
        data={filterProductsByTitle(products, searchQuery)}
        keyExtractor={(item, idx) =>
          idx.toString() + (item as Product)?.id.toString() ?? ''
        }
        renderItem={({ item, index }) => (
          <ProductCard product={item as ProductOrNull} index={index} />
        )}
        ItemSeparatorComponent={() => <Spacer size={SPACES.xl} />}
        refreshControl={
          <RefreshControl
            refreshing={isFetching && !isLoading}
            onRefresh={() => refetch()}
          />
        }
      />
      <StoreFloatingButton />
    </StyledSafeArea>
  )
}
