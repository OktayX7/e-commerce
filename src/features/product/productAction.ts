// Package Imports
import {createAsyncThunk} from '@reduxjs/toolkit'

// Feature Imports
import {GetProductsApi, GetProductApi} from './apis'
import {setProducts, setProduct, setIncrement, setDecrement, setQueryFilter} from './productSlice'
import {GetProductsCategoryApi} from 'features/category/apis'

export const getProductsAction = createAsyncThunk('products', async (any, {dispatch}) => {
  const productsResponse = await GetProductsApi()

  if (productsResponse) {
    dispatch(setProducts(productsResponse))
  }
})

export const getCategoryProductsAction = (slug: string) => async (dispatch: any) => {
  const categoryProductsResponse = await GetProductsCategoryApi(slug)

  if (categoryProductsResponse) {
    dispatch(setProducts(categoryProductsResponse))
  }
}
export const getProductAction = createAsyncThunk('product', async (id: string, {dispatch}) => {
  console.warn('getProductAction triggered')
  const productResponse = await GetProductApi(id)

  if (productResponse) {
    dispatch(setProduct(productResponse))
  }
})

export const setQueryFilterAction = (queryFilter: string) => (dispatch: any) =>
  dispatch(setQueryFilter(queryFilter))

export const setIncrementAction = (id: number) => (dispatch: any) => dispatch(setIncrement(id))

export const setDecrementAction = (id: number) => (dispatch: any) => dispatch(setDecrement(id))
