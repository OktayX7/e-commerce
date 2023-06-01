import {ProductModel} from 'features/product'

export interface CartState {
  products: ProductModel[]
  totalPrice: number
  shippingPrice: number
  show: boolean
}
