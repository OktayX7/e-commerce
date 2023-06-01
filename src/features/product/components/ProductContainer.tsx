// React Imports
import {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'

// Feature Imports
import {ProductList} from './ProductList'
import {ProductNavbar} from './ProductNavbar'
import {getProductsAction, getCategoryProductsAction} from '../productAction'

// Hook Imports
import {useAppDispatch} from 'hooks'

// Style Imports
import '../style/product.scss'

interface ProductContainerProps {
  categoryUrl?: string
}

export const ProductContainer: FC<ProductContainerProps> = () => {
  const dispatch = useAppDispatch()
  const {slug} = useParams<{slug: string}>()

  useEffect(() => {
    if (slug) {
      const getCategoryProducts = () => dispatch(getCategoryProductsAction(slug))
      getCategoryProducts()
    } else {
      dispatch(getProductsAction())
    }
  }, [slug])

  return (
    <div id='category' className='px-4 max-w-7xl mx-auto'>
      <ProductNavbar />
      <ProductList />
    </div>
  )
}
