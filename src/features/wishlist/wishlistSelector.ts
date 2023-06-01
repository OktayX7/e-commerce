/* eslint-disable indent */
import {RootState} from 'libs'

export const getWishlistState =
  () =>
  ({wishlist: {wishlist}}: RootState) =>
    wishlist
