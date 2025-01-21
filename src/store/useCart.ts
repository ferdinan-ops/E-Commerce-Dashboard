import { getItem, setItem } from '@/lib/localstorage'
import { CartType } from '@/types/cart.type'
import { create } from 'zustand'

type CartStore = {
  products: CartType[]
  addToCart: (product: CartType) => void
  removeFromCart: (product: CartType) => void
  setQuantity: (product: CartType, quantity: number) => void
}

const useCart = create<CartStore>((set) => ({
  products: getItem('cart') || [],
  addToCart: (product) => {
    set((state) => {
      const index = state.products.findIndex((item) => item.id === product.id)
      let newProducts
      if (index === -1) {
        newProducts = [...state.products, { ...product, quantity: 1 }]
      } else {
        newProducts = [...state.products]
        newProducts[index].quantity = product.quantity
      }

      setItem('cart', newProducts)
      return { products: newProducts }
    })
  },
  removeFromCart: (product) => {
    set((state) => {
      const index = state.products.findIndex((item) => item.id === product.id)
      if (index === -1) return { products: state.products }
      const newProducts = [...state.products]
      newProducts.splice(index, 1)
      setItem('cart', newProducts)
      return { products: newProducts }
    })
  },
  setQuantity: (product, quantity) => {
    set((state) => {
      const index = state.products.findIndex((item) => item.id === product.id)
      if (index === -1) return { products: state.products }
      const newProducts = [...state.products]
      newProducts[index].quantity = quantity
      setItem('cart', newProducts)
      return { products: newProducts }
    })
  }
}))

export default useCart
