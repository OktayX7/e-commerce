// Feature Imports
import {ProductCategoryListItem} from './ProductCategoryListItem'
import {getCategoriesState} from 'features/category/categorySelector'

// Hook Imports
import {useAppSelector, useDesktop} from 'hooks'

// Package Imports
import classNames from 'classnames'

// React Imports

import {FC} from 'react'

interface ProductCategoryListProps {
  openCategory?: boolean
}

export const ProductCategoryList: FC<ProductCategoryListProps> = ({openCategory}) => {
  const categories = useAppSelector(getCategoriesState())

  const isDesktop = useDesktop()

  const categoryListClasses = classNames(
    'overflow-hidden',
    {
      'height-animation-open text-primary-600': openCategory && !isDesktop,
      'height-animation-close hidden': !openCategory && !isDesktop,
    },
    {
      'flex items-center gap-4': isDesktop,
      'pt-9 pb-2': !isDesktop,
    }
  )

  return (
    <ul className={categoryListClasses}>
      {categories.map((category) => {
        const {title} = category
        return (
          <div key={title}>
            <ProductCategoryListItem category={category} />
          </div>
        )
      })}
    </ul>
  )
}
