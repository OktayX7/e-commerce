// React Imports
import {FC} from 'react'

// Component Imports
import {pagesArr} from '../pagesArr'
import {PageItem} from './PageItem'

interface PagesProps {
  closeDropdown?: () => void
}

export const Pages: FC<PagesProps> = ({closeDropdown}) => {
  return (
    <ul className='pt-4 pb-5 menu-desktop'>
      {pagesArr.map((page, index) => (
        <PageItem closeDropdown={closeDropdown} key={index} page={page} />
      ))}
    </ul>
  )
}
