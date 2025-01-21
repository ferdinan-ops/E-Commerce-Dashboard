import { useCart } from '@/store'
import { useTitle } from '@/hooks'

import { CartCard, OrderSummary } from '@/components/organisms'

export default function Cart() {
  useTitle('Cart')

  const products = useCart((state) => state.products)
  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

  return (
    <div className="flex flex-col justify-between gap-[80px] xl:flex-row">
      <div className="flex flex-1 flex-col gap-10 md:flex-[2]">
        {products.length > 0 ? (
          products.map((product) => <CartCard product={product} key={product.id} />)
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold text-primary/60 dark:text-white/60">Your cart is empty</p>
          </div>
        )}
      </div>
      {products.length > 0 && <OrderSummary total={subtotal.toFixed(2)} />}
    </div>
  )
}
