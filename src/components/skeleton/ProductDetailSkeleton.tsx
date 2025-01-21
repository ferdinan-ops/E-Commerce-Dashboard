import { Skeleton } from '@/components/ui/skeleton'

export default function ProductDetailSkeleton() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="flex flex-col items-start justify-between gap-5 md:flex-row md:gap-[50px]">
        <div className="h-[400px] w-full md:flex-1">
          <Skeleton className="h-full w-full flex-1" />
        </div>
        <div className="flex w-full flex-1 flex-col gap-6 py-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-8 w-28" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
          <Skeleton className="h-8 w-28" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="flex h-10 w-36 items-center" />
          </div>
          <Skeleton className="mt-5 flex h-10 w-full" />
        </div>
      </section>
    </div>
  )
}
