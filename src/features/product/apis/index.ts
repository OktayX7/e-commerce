// Util and Lib Imports
import {requests} from 'utils'

// Feature Imports
import {ProductModel} from '../models'

const productsBaseUrl = '/products'

export const GetProductsApi = () => requests.get<ProductModel[]>(`${productsBaseUrl}`)

export const GetProductApi = (id: string) => requests.get<ProductModel>(`${productsBaseUrl}/${id}`)
