import { cn } from '@/lib/utils'

interface ImageProps {
  src?: string
  className?: string
  alt: string
}

export default function Image({ src, alt, className }: ImageProps) {
  return <img alt={alt} src={src} className={cn('object-cover', className)} />
}
