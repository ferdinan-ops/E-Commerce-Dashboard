import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface BrandProps {
  className?: string
  href?: string
}

export default function Brand({ className, href }: BrandProps) {
  return (
    <Link to={href ?? '/'} className={cn('text-2xl font-bold text-primary dark:text-white', className)}>
      Shopify
    </Link>
  )
}
