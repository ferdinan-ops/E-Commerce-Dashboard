import { useQuery } from 'react-query'
import { fetchCategoriesFn } from '../api/product.api'

export const useGetCategories = () => {
  return useQuery('categories', fetchCategoriesFn)
}
