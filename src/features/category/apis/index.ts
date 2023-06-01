// Util and Lib Imports
import {requests} from 'utils'

// Feature Imports
import {CategoryModel} from './../models'
import {ProductModel} from 'features/product'

const categoriesBaseUrl = '/categories'

export const GetCategoriesApi = () => requests.get<CategoryModel[]>(`${categoriesBaseUrl}`)

export const GetProductsCategoryApi = (slug: string) =>
  requests.get<ProductModel[]>(`${categoriesBaseUrl}/${slug}`)
