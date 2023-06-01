// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// React Imports
import {FC, useState} from 'react'

// Hook Imports
import {useDesktop} from 'hooks'

// Feature Imports
import {ProductCategoryList} from './ProductCategoryList'
import {ProductSearch} from './ProductSearch'

export const ProductNavbar: FC = () => {
  const [isOpenCategoryList, setIsOpenCategoryList] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const isDesktop = useDesktop()

  return (
    <div className='py-10'>
      <ul className='flex items-center justify-between text-lg text-primary-600'>
        {!isDesktop && (
          <li
            onClick={() => {
              setIsOpenCategoryList(!isOpenCategoryList)
              setIsOpenSearch(false)
            }}
            className='cursor-pointer hover:text-primary lg:hover:text-warning'>
            Categories
          </li>
        )}
        {isDesktop && <ProductCategoryList openCategory={isOpenCategoryList} />}

        <li
          onClick={() => {
            setIsOpenSearch(!isOpenSearch)
            setIsOpenCategoryList(false)
          }}
          className='cursor-pointer flex items-center hover:text-primary lg:hover:text-warning'>
          Search
          <FontAwesomeIcon
            icon={faSearch}
            rotation={90}
            className='text-xs text-primary-300 ml-1'
          />
        </li>
      </ul>

      {!isDesktop && (
        <div className={isOpenCategoryList ? 'max-h-80 duration-500' : 'max-h-0 duration-500'}>
          <ProductCategoryList openCategory={isOpenCategoryList} />
        </div>
      )}

      <div className={isOpenSearch ? 'max-h-80 duration-500' : 'max-h-0 duration-500'}>
        <ProductSearch isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch} />
      </div>
    </div>
  )
}
