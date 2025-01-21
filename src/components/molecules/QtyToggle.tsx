import { HiMinus, HiPlus } from 'react-icons/hi2'

import { Button } from '@/components/ui/button'

interface QtyToggleProps {
  onMinus: () => void
  onPlus: () => void
  quantity: number
}

export default function QtyToggle({ quantity, onMinus, onPlus }: QtyToggleProps) {
  return (
    <div className="flex w-fit items-center border dark:border-white/10">
      <Button size="icon" variant="ghost" className="rounded-none text-xs" onClick={onMinus} disabled={quantity === 1}>
        <HiMinus />
      </Button>
      <span className="w-12 text-center text-sm font-medium">{quantity}</span>
      <Button size="icon" variant="ghost" className="rounded-none text-xs" onClick={onPlus}>
        <HiPlus />
      </Button>
    </div>
  )
}
