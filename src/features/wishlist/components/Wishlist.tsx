// Feature Imports
import {WishlistItem} from './WishlistItem'

// React Imports
import {FC} from 'react'

//Feature Imports
import {ProductModel} from 'features/product'

interface WishlistProps {
  wishlist: ProductModel[]
}

export const Wishlist: FC<WishlistProps> = ({wishlist}) => {
  return (
    <div className='flex flex-col'>
      {wishlist.length > 0 &&
        wishlist.map((item, index) => {
          return <WishlistItem key={index} product={item} />
        })}
    </div>
  )
}
