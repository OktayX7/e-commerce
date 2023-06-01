import {BaseModel} from 'models'

export type ProductModel = BaseModel<number> & {
  title: string
  description: string
  price: number
  images: string[]
  rating: number
  like: boolean
  category: string
  quantity: number
  discountPercentage: number
  details: {
    description: string
  }
  materialDetails: string[]
  additionalInformation: {
    weight: number
    dimensions: string
    materials: string
    otherInfo: string
    size: string
  }
  stock: number
}
