import { Link } from 'react-router-dom'

import { HiOutlineHome } from 'react-icons/hi2'

import { Button } from '@/components/ui/button'
import { Breadcrumbs, ModeToggle, Search } from '@/components/molecules'

export default function NavBar() {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 hidden h-[68px] w-full items-center border-b border-[#E9E9E9] bg-white text-primary dark:border-white/10 dark:bg-primary dark:text-white lg:flex">
      <div className="flex w-full items-center justify-between px-[22px]">
        <nav className="flex items-center gap-3">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="outline" size="icon" className="rounded-full border-none dark:bg-primary">
                <HiOutlineHome className="text-xl" />
              </Button>
            </Link>
          </div>
          <Breadcrumbs />
        </nav>
        <nav className="flex items-center gap-4">
          <ModeToggle />
          <Search />
        </nav>
      </div>
    </header>
  )
}
