import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Cart, Product, ProductDetail } from '@/pages'

import { DashboardLayout } from '@/components/layouts'
import { Toaster } from '@/components/ui/toaster'

export default function App() {
  return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/">
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}
