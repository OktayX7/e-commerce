// React Imports
import {FC, useState} from 'react'

// Feature Imports
import {CategoryList} from '../../../category/components'
import {categories} from '../../../category'
import {Pages} from 'components/Layout/Header/pages/components'

interface TopMenuProps {
  closeDropdown?: () => void
}

export const TopMenu: FC<TopMenuProps> = ({closeDropdown}) => {
  const [isOpenCategories, setOpenCategories] = useState(false)
  const [isOpenPages, setOpenPages] = useState(false)

  const openCategories = () => {
    setOpenCategories(!isOpenCategories)
  }
  const openPages = () => {
    setOpenPages(!isOpenPages)
  }

  return (
    <ul className='pt-4'>
      <li
        onClick={openCategories}
        className='relative flex justify-between items-center py-3 cursor-pointer border-b border-b-slate-200  '>
        <p className='relative py-[2px]'>
          Categories <span className='text-[10px] absolute left-19 top-0'>NEW</span>
        </p>
        <span className='text-xl'>{isOpenCategories ? '-' : '+'}</span>
      </li>

      {isOpenCategories && (
        <div className='opacity-translateY-ease-in-out-05sn'>
          <CategoryList closeDropdown={closeDropdown} categories={categories} />
        </div>
      )}
      <li
        onClick={openPages}
        className='flex justify-between items-center py-3 cursor-pointer border-b border-b-slate-200 '>
        <p>Pages</p>
        <span className='text-xl'>{isOpenPages ? '-' : '+'}</span>
      </li>
      {isOpenPages && <Pages closeDropdown={closeDropdown} />}
    </ul>
  )
}
