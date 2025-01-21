import { ProductType } from './product.type'

export type CartType = ProductType & { quantity: number }
