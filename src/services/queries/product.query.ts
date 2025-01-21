import { useQuery } from 'react-query'

import { fetchProductFn, fetchAllProductsFn, fetchProductsByCategoryFn } from '@/services/api/product.api'

import { ProductType } from '@/types/product.type'

type useGetProductsParams = {
  category?: string
  search?: string
  enabled?: boolean
  page?: number
}

type useGetProductReturn = {
  data: ProductType[]
  totalPages: number
}

export const useGetProducts = ({ category, search, enabled, page = 1 }: useGetProductsParams) => {
  return useQuery(
    ['products', category, page, search],
    async (): Promise<useGetProductReturn> => {
      if (category) {
        const response = await fetchProductsByCategoryFn(category)
        return { data: response.slice((page - 1) * 10, page * 10), totalPages: response.length }
      }

      if (search) {
        const response = await fetchAllProductsFn()
        const formattedResponse = response.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
        return { data: formattedResponse, totalPages: response.length }
      }

      const response = await fetchAllProductsFn()
      return { data: response.slice((page - 1) * 10, page * 10), totalPages: response.length }
    },
    { enabled }
  )
}

export const useGetProduct = (id: number) => {
  return useQuery(['product', id], () => fetchProductFn(id), {
    enabled: !!id
  })
}
