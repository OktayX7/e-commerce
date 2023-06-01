// React Imports
import {FC} from 'react'

// UI Imports
import {Link} from 'components/Ui'

interface PageItemProps {
  page: {
    name: string
    path: string
  }

  closeDropdown?: () => void
}

export const PageItem: FC<PageItemProps> = ({page, closeDropdown}) => {
  return (
    <li className='px-5 lg:px-10 py-2'>
      <Link
        onClick={closeDropdown}
        className='hover:text-primary lg:hover:text-white'
        to={page.path}>
        {page.name}
      </Link>
    </li>
  )
}
