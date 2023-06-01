// React Imports
import {FC} from 'react'
import {NavLink, useLocation} from 'react-router-dom'

// Feature Imports
import {CategoryModel} from 'features/category/models'

// Package Imports
import classNames from 'classnames'

// Hook Imports
import {useDesktop} from 'hooks'

interface ProductCategoryItemProps {
  category: CategoryModel
}

export const ProductCategoryListItem: FC<ProductCategoryItemProps> = ({category}) => {
  const isDesktop = useDesktop()
  const location = useLocation()
  const home = location.pathname === '/'

  const categoryItemClasses = classNames({
    'mb-2 pb-2 border-b border-b-primary-300': !isDesktop,
    'text-lg flex gap-4': isDesktop,
  })
  const {title, url} = category
  return (
    <li className={categoryItemClasses}>
      <NavLink
        className={`block hover:text-warning transition-all ${
          category.title === 'All' && home && 'text-warning'
        } `}
        to={`/product-category/${url}`}>
        {title}

        {category.title !== 'Essentials' && isDesktop && (
          <span className='text-primary-300 ml-2'>/</span>
        )}
      </NavLink>
    </li>
  )
}
