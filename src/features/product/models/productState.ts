import {ProductModel} from './productModel'

export interface ProductState {
  products: ProductModel[]
  product: ProductModel
  queryFilter: string
}
