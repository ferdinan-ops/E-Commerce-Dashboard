import { Link } from 'react-router-dom'
import { HiXMark } from 'react-icons/hi2'

import { Image } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { QtyToggle } from '@/components/molecules'

import { useCart } from '@/store'
import { CartType } from '@/types/cart.type'

interface CartCardProps {
  product: CartType
}

export default function CartCard({ product }: CartCardProps) {
  const { setQuantity, removeFromCart } = useCart((state) => ({
    setQuantity: state.setQuantity,
    removeFromCart: state.removeFromCart
  }))

  return (
    <article className="flex flex-col justify-between gap-5 md:flex-row md:items-center md:gap-0">
      <Link to={`/${product.id}`} className="flex items-center gap-3">
        <div className="h-20 w-20 rounded-lg border bg-white">
          <Image src={product.image} alt={product.title} className="h-full w-full object-contain p-3" />
        </div>
        <div className="flex max-w-[230px] flex-col gap-1">
          <p className="line-clamp-1 text-sm font-semibold text-primary dark:text-white">{product.title}</p>
          <p className="line-clamp-2 text-[10px] font-medium text-primary/60 dark:text-white/60">
            {product.description}
          </p>
        </div>
      </Link>
      <div className="ml-auto flex items-center gap-8 md:ml-0">
        <p className="text-sm font-semibold text-primary dark:text-white">$ {product.price}</p>
        <div className="flex items-center gap-3">
          <QtyToggle
            quantity={product.quantity}
            onMinus={() => setQuantity(product, product.quantity - 1)}
            onPlus={() => setQuantity(product, product.quantity + 1)}
          />
          <Button size="icon" variant="secondary" onClick={() => removeFromCart(product)}>
            <HiXMark />
          </Button>
        </div>
      </div>
    </article>
  )
}
