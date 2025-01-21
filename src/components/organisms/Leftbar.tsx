import { HiXMark } from 'react-icons/hi2'

import { cn } from '@/lib/utils'
import { MAIN_MENU } from '@/lib/menu'

import { useDisableBodyScroll, useOutsideClick } from '@/hooks'

import { Brand } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { ActiveLink } from '@/components/molecules'

interface LeftbarProps {
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Leftbar({ isShow, setIsShow }: LeftbarProps) {
  useDisableBodyScroll(isShow)
  const ref = useOutsideClick(() => setIsShow(false))

  return (
    <aside
      ref={ref}
      className={cn(
        'fixed top-0 z-[9999999] h-screen w-64 border-r border-[#E9E9E9] bg-white text-primary transition-transform duration-300',
        'dark:border-white/10 dark:bg-primary dark:text-white',
        'lg:sticky',
        isShow ? '-translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}
    >
      {isShow && (
        <Button
          variant="outline"
          onClick={() => setIsShow(false)}
          className="fixed left-64 top-0 z-[9999999] ml-2 mt-2 flex h-12 w-12 rounded-full p-0 dark:bg-primary md:ml-3 md:mt-3 md:h-14 md:w-14"
        >
          <HiXMark className="m-auto text-2xl dark:text-white md:text-3xl" />
        </Button>
      )}
      <nav className="flex flex-col gap-4 px-4 py-5">
        <Brand className="hidden gap-3 p-1 text-primary lg:flex lg:gap-3.5" />
        <div className="flex flex-col gap-2">
          <span className="px-3 py-1 text-xs font-semibold uppercase text-black/40">menu</span>
          <div className="text-foreground flex flex-col gap-3">
            {MAIN_MENU.map(({ href, title, icon }, index) => (
              <ActiveLink href={href} name={title} icon={icon} key={index} />
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
