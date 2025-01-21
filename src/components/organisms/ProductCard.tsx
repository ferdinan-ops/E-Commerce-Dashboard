import { useNavigate } from 'react-router-dom'
import { HiShoppingCart, HiStar } from 'react-icons/hi2'

import { Image } from '@/components/atoms'
import { Button } from '@/components/ui/button'

import { ProductType } from '@/types/product.type'

interface ProductCardProps {
  item: ProductType
}

export default function ProductCard({ item }: ProductCardProps) {
  const navigate = useNavigate()

  return (
    <article className="flex h-fit flex-col gap-3" key={item.id}>
      <Image
        src={item.image}
        alt={item.title}
        className="h-[180px] w-full border border-zinc-200/70 bg-white object-contain p-10 dark:rounded-xl"
      />
      <div className="flex flex-col gap-3 px-2">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-1 text-sm font-semibold text-primary dark:text-white">{item.title}</h3>
          <div className="flex items-center gap-1.5">
            <HiStar className="text-sm text-[#FFC633]" />
            <span className="text-xs text-black/60 dark:text-white/60">
              {item.rating.rate} ({item.rating.count})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary dark:text-white">$ {item.price}</p>
          <Button size="sm" className="gap-2 rounded-none text-xs" onClick={() => navigate(`/${item.id}`)}>
            <HiShoppingCart className="text-[10px]" />
            <span>Buy</span>
          </Button>
        </div>
        {/* <p className="line-clamp-2 text-xs">{item.description}</p> */}
      </div>
    </article>
  )
}
