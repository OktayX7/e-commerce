/* eslint-disable indent */
import {RootState} from 'libs'

export const getProductsState =
  () =>
  ({product: {products}}: RootState) =>
    products

export const getProductState =
  () =>
  ({product: {product}}: RootState) =>
    product

export const getProductQuerySelector =
  () =>
  ({product: {queryFilter}}: RootState) =>
    queryFilter
