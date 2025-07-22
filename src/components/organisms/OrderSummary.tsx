import { Button } from '@/components/ui/button'

interface OrderSummaryProps {
  total: string
}

export default function OrderSummary({ total }: OrderSummaryProps) {
  return (
    <div className="flex-1 rounded-xl border px-6 py-8 dark:border-white/10 h-fit">
      <h3 className="mb-10 text-base font-semibold text-primary dark:text-white">Order Summary</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5C5F6A] dark:text-white/60">Subtotal:</p>
          <p className="text-sm font-semibold text-primary dark:text-white">$ {total}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5C5F6A] dark:text-white/60">Shipping:</p>
          <p className="text-sm font-semibold text-primary dark:text-white">Free</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5C5F6A] dark:text-white/60">Tax:</p>
          <p className="text-sm font-semibold text-primary dark:text-white">$ 0.00</p>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-[#E6E7E8] dark:bg-white/10" />
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#5C5F6A] dark:text-white/60">Total:</p>
        <p className="text-sm font-semibold text-primary dark:text-white">$ {total}</p>
      </div>
      <Button className="mt-8 w-full">Checkout</Button>
    </div>
  )
}
