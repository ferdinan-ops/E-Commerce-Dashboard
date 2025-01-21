import api from '@/lib/api'
import { ProductType } from '@/types/product.type'

export const fetchAllProductsFn = async (): Promise<ProductType[]> => {
  const response = await api.get('/products')
  return response.data
}

export const fetchProductFn = async (id: number): Promise<ProductType> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const fetchCategoriesFn = async (): Promise<string[]> => {
  const response = await api.get('/products/categories')
  return response.data
}

export const fetchProductsByCategoryFn = async (category: string): Promise<ProductType[]> => {
  const response = await api.get(`/products/category/${category}`)
  return response.data
}
