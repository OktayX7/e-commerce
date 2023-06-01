// Package Imports
import {combineReducers} from 'redux'

// Feature Imports
import authSlice from 'features/auth/authSlice'
import productSlice from 'features/product/productSlice'
import wishlistSlice from 'features/wishlist/wishlistSlice'
import categorySlice from 'features/category/categorySlice'
import cartSlice from 'features/cart/cartSlice'
import loadingSlice from 'components/Ui/Loading/loadingSlice'
import blogSlice from 'features/detailPages/blog/blogSlice'

export const reducer = combineReducers({
  auth: authSlice,
  product: productSlice,
  wishlist: wishlistSlice,
  category: categorySlice,
  cart: cartSlice,
  blog: blogSlice,
  loading: loadingSlice,
})
