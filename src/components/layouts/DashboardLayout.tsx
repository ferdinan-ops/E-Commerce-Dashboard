import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { useGetDevices } from '@/hooks'
import { Leftbar, MobileNavBar, NavBar } from '@/components/organisms'

export default function DashboardLayout() {
  const [isOpenLeftBar, setIsOpenLeftBar] = React.useState(false)

  const { isDesktop, isMobile, isTablet } = useGetDevices()

  return (
    <div className="flex">
      <Leftbar isShow={isOpenLeftBar} setIsShow={setIsOpenLeftBar} />
      <main className="flex flex-1 flex-col">
        {(isMobile || isTablet) && <MobileNavBar action={() => setIsOpenLeftBar(true)} />}
        {isDesktop && <NavBar />}
        <section className="relative flex min-h-[calc(100vh-68px)] flex-1 flex-col bg-white p-4 text-primary dark:bg-primary dark:text-white md:p-6 lg:min-h-0 lg:p-7">
          <Outlet />
        </section>
      </main>
    </div>
  )
}
