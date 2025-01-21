import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { PiCommand, PiMagnifyingGlass } from 'react-icons/pi'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'

import { Image } from '@/components/atoms'

import { cn } from '@/lib/utils'
import { useDebounce } from '@/hooks'
import { useGetProducts } from '@/services/queries/product.query'

interface SearchProps {
  className?: string
  action?: () => void
}

export default function Search({ className, action }: SearchProps) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)
  const [keyword, setKeyword] = React.useState('')

  const debounceKeyword = useDebounce(keyword, 500)
  const { data: products, isLoading } = useGetProducts({
    search: debounceKeyword,
    enabled: !!isOpen
  })

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleClick = () => {
    setIsOpen((open) => !open)
    action && action()
  }

  const handleNavigate = (productId: number) => {
    navigate(`/${productId}`)
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        className={cn(
          'flex w-48 cursor-pointer items-center rounded-lg bg-black/5 px-2 py-1 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/5',
          className
        )}
      >
        <PiMagnifyingGlass className="text-black/40 dark:text-white/20" />
        <span className="ml-2 mr-2 flex-1 text-sm font-semibold text-black/40 dark:text-white/40">Search</span>
        <div className="flex items-center gap-[2px] text-black/30 dark:text-white/30">
          <PiCommand className="text-sm" />
          <span className="text-xs">+</span>
          <span className="text-xs">K</span>
        </div>
      </div>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search" value={keyword} onValueChange={(search) => setKeyword(search)} />
        <CommandList className="scroll-custom">
          <CommandEmpty>No results to be found</CommandEmpty>
          <CommandGroup>
            {isLoading ? (
              <CommandItem className="flex items-center gap-3.5">Taking products...</CommandItem>
            ) : (
              products?.data?.map((product) => (
                <CommandItem key={product.id}>
                  <button onClick={() => handleNavigate(product.id)} className="flex flex-1 items-center gap-3.5">
                    <Image src={product.image} alt={product.title} className="h-6 w-6 rounded-md object-contain bg-white p-1" />
                    <span className="line-clamp-1 text-sm font-medium">{product.title}</span>
                  </button>
                </CommandItem>
              ))
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  )
}
