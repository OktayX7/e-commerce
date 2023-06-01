/* eslint-disable indent */
import {RootState} from 'libs'

export const getCartState =
  () =>
  ({cart: {products}}: RootState) =>
    products

export const getCartTotalPrice =
  () =>
  ({cart: {totalPrice}}: RootState) =>
    totalPrice

export const getCartShow =
  () =>
  ({cart: {show}}: RootState) =>
    show

export const getCartProductsCount =
  () =>
  ({cart: {products}}: RootState) =>
    products.reduce((acc, product) => acc + product.quantity, 0)

export const getCartShippingPrice =
  () =>
  ({cart: {shippingPrice}}: RootState) =>
    shippingPrice
