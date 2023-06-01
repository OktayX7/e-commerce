// React Imports
import {FC, useEffect, useState} from 'react'

// Component Imports
import {Button} from 'components'

// Feature Imports
import {ProductListItem} from './ProductListItem'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

// Feature Imports
import {getProductQuerySelector, getProductsState} from '../productSelector'
import {ProductModel} from '../models'
import {setQueryFilterAction} from '../productAction'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export const ProductList: FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(16)
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([])

  const products = useAppSelector(getProductsState())
  const productQueryFilter = useAppSelector(getProductQuerySelector())

  const dispatch = useAppDispatch()
  const setQueryFilter = () => dispatch(setQueryFilterAction(''))

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(productQueryFilter.toLowerCase())
      )
    )
  }, [productQueryFilter, products])

  return (
    <>
      {productQueryFilter?.length > 0 && (
        <div
          className='border border-primary-300 hover:border-primary-600 rounded-full px-5 py-1 mt-5 flex-auto inline-flex hover:line-through  justify-center items-center cursor-pointer'
          onClick={setQueryFilter}>
          <FontAwesomeIcon icon={faXmark} className='mr-3' />
          <span className='text-center'>Search result for: {productQueryFilter}</span>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16'>
          {filteredProducts.slice(0, visibleProducts).map((product: ProductModel) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className='my-10'>No products were found matching your selection.</div>
      )}

      {filteredProducts.length > 0 && products?.length > visibleProducts && (
        <div className='mt-4 mb-9'>
          <Button
            onClick={() => setVisibleProducts(visibleProducts + 16)}
            size='full'
            className='py-4 border-b border-t'>
            Load More
          </Button>
        </div>
      )}
    </>
  )
}
