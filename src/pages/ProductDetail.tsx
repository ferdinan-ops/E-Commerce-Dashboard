import * as React from 'react'
import { HiShoppingCart, HiStar } from 'react-icons/hi2'
import { useNavigate, useParams } from 'react-router-dom'

import { useTitle } from '@/hooks'
import { toast } from '@/hooks/use-toast'

import { Image } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { QtyToggle } from '@/components/molecules'
import { ProductDetailSkeleton } from '@/components/skeleton'

import { useCart } from '@/store'
import { useGetProduct } from '@/services/queries/product.query'

export default function ProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { data: product, isSuccess } = useGetProduct(Number(id))

  useTitle(`Product - ${product?.title}`)

  const [quantity, setQuantity] = React.useState(1)
  const { addToCart, products } = useCart((state) => ({
    addToCart: state.addToCart,
    products: state.products
  }))

  React.useEffect(() => {
    const isProductInCart = products.some((item) => item.id === product?.id)
    if (isProductInCart) setQuantity(products.find((item) => item.id === product?.id)?.quantity || 1)
  }, [products, product])

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity })
      toast({
        title: 'Success',
        description: 'Product added to cart'
      })
      navigate('/cart')
    }
  }

  if (!isSuccess) {
    return <ProductDetailSkeleton />
  }

  return (
    <div className="flex flex-1 flex-col">
      <section className="flex flex-col items-start justify-between gap-5 md:flex-row md:gap-[50px]">
        <div className="h-[100px] w-full flex-1 border border-zinc-200/70 bg-white dark:rounded-xl md:h-[410px]">
          <Image
            src={product?.image}
            alt={product?.title || ''}
            className="h-full w-full object-contain p-20 md:p-10"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 py-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex w-fit items-center gap-1.5 bg-[#F6F6F6] px-3 py-2 dark:bg-white/5">
                <HiStar className="text-base text-[#5C5F6A]" />
                <span className="mt-[1px] text-xs font-semibold text-black/60 dark:text-white/60">
                  {product?.rating.rate} — {product?.rating.count} Reviews
                </span>
              </div>
              <div className="flex w-fit items-center gap-1.5 border border-[#F6F6F6] px-3 py-2 dark:border-white/10">
                <span className="text-xs font-semibold text-black/60 dark:text-white/60">IN STOCK</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold leading-relaxed">{product?.title}</h2>
              <p className="text-xs font-medium leading-relaxed text-black/60 dark:text-white/60">
                {product?.description}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-primary dark:text-white">$ {product?.price}</h3>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium text-primary/60 dark:text-white/60">QUANTITY</span>
            <QtyToggle
              quantity={quantity}
              onMinus={() => setQuantity(quantity - 1)}
              onPlus={() => setQuantity(quantity + 1)}
            />
          </div>
          <Button className="mt-5" onClick={handleAddToCart}>
            <HiShoppingCart />
            <span>Add to cart</span>
          </Button>
        </div>
      </section>
    </div>
  )
}
