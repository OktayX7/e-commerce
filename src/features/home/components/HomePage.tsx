// Feature Imports
import {useAppDispatch} from 'hooks'
import {Slick} from '../slick'
import {ProductContainer} from 'features/product'
import {useEffect} from 'react'
import {getCategoriesAction} from 'features/category/categoryAction'
import {Loading} from 'components'
import {getLoadingState} from 'components'
import {useAppSelector} from 'hooks'
export const HomePage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getCategories = () => dispatch(getCategoriesAction())
    getCategories()
  }, [])

  const loading = useAppSelector(getLoadingState())

  return (
    <>
      <Slick />
      <ProductContainer />
      {loading && (
        <div className='fixed top-0 opacity-50 h-screen w-screen z-50 bg-black'>
          <div className=' absolute top-1/2 left-1/2 '>
            <Loading size='4' />
          </div>
        </div>
      )}
    </>
  )
}
