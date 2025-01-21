import { HiBars3 } from 'react-icons/hi2'

import { Brand } from '@/components/atoms'
import { ModeToggle } from '@/components/molecules'

interface MobileNavBarProps {
  action?: () => void
}

export default function MobileNavBar({ action }: MobileNavBarProps) {
  return (
    <header className="sticky inset-x-0 top-0 z-30 flex h-[68px] items-center border-b border-[#E9E9E9] bg-white px-4 dark:border-white/10 dark:bg-primary dark:text-white md:px-6 lg:hidden">
      <nav className="flex w-full items-center justify-between">
        <HiBars3 className="h-5 w-5" onClick={action} />
        <Brand className="h-8 gap-4 text-xl" />
        <ModeToggle />
      </nav>
    </header>
  )
}
