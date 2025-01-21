import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Pagination, ProductCard } from '@/components/organisms'

import { useQueryParams, useTitle } from '@/hooks'

import { useGetProducts } from '@/services/queries/product.query'
import { useGetCategories } from '@/services/queries/category.query'

export default function Product() {
  useTitle('Product')
  const { params, createParam, deleteParam } = useQueryParams(['page', 'category'])

  const { data: products, isFetching } = useGetProducts({
    category: params.category ?? null,
    page: params.page ? Number(params.page) : 1
  })

  const { data: categories, isLoading } = useGetCategories()

  const handleClickCategory = (category: string) => {
    if (category === '') {
      deleteParam('category')
    } else {
      createParam({ key: 'category', value: category })
    }

    deleteParam('page')
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <section className="flex max-w-[calc(100vw-2rem)] items-center gap-3 overflow-x-auto">
        {isLoading ? (
          [...Array(5)].map((_, i) => <Skeleton key={i} className="h-8 w-20" />)
        ) : (
          <React.Fragment>
            <Button
              size="sm"
              className="rounded-none text-xs"
              variant={params.category === '' ? 'default' : 'secondary'}
              onClick={() => handleClickCategory('')}
            >
              All
            </Button>
            {categories?.map((item, index) => (
              <Button
                size="sm"
                className="rounded-none text-xs"
                variant={params.category === item ? 'default' : 'secondary'}
                onClick={() => handleClickCategory(item)}
                key={index}
              >
                {item}
              </Button>
            ))}
          </React.Fragment>
        )}
      </section>

      <section className="flex-1">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 xl:grid-cols-5">
          {isFetching
            ? [...Array(10)].map((_, i) => <Skeleton key={i} className="h-[calc(180px+95px)]" />)
            : products?.data?.map((item) => <ProductCard item={item} key={item.id} />)}
        </div>
      </section>

      {(products?.totalPages ?? 0) > 10 ? (
        <Pagination
          pageSize={10}
          totalCount={products?.totalPages as number}
          currentPage={params.page !== '' ? parseInt(params.page) : 1}
          onPageChange={(page) => createParam({ key: 'page', value: page.toString() })}
        />
      ) : null}
    </div>
  )
}
