// React Imports
import {FC} from 'react'

// Feature Imports
import {CategoryModule} from './CategoryModule'

export interface CategoryListProps {
  categories: {
    img: string
    imgClassName?: string
    spanClassname?: string
    spanText: string
    to: string
  }[]
  closeDropdown?: () => void
}

export const CategoryList: FC<CategoryListProps> = ({categories, closeDropdown}) => {
  return (
    <ul className='flex justify-between lg:justify-evenly flex-wrap pt-7 px-3 lg:bg-white lg:p-8 lg:divide-x-2 divide-slate-200 lg:flex-nowrap menu-desktop'>
      {categories.map((category, index) => {
        return (
          <CategoryModule
            closeDropdown={closeDropdown}
            key={index}
            {...category}
            url={category.to}
            imgClassName='mx-auto mb-4 hover:scale-125 transform transition-all duration-300 ease-in-out'
            spanClassname='text-[14px]'
          />
        )
      })}
    </ul>
  )
}
