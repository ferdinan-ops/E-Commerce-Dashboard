import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { cn } from '@/lib/utils'

const routes = [
  { path: '/', breadcrumb: 'Product' },
  { path: '/:id', breadcrumb: 'Detail' },
  { path: '/cart', breadcrumb: 'Cart' }
]

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes)
  const location = useLocation()

  return (
    <div className="mt-[3px] flex items-center gap-3 text-sm font-semibold">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <React.Fragment key={index}>
          <Link
            to={match.pathname}
            className={cn(
              match.pathname !== location.pathname && 'text-black/40 dark:text-white/40',
              'hover:underline'
            )}
          >
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && <span className="text-black/40 dark:text-white/40">/</span>}
        </React.Fragment>
      ))}
    </div>
  )
}
