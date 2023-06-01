// React Imports
import {FC} from 'react'

// UI Imports
import {Link} from 'components/Ui'

interface BottomMenuProps {
  closeDropdown?: () => void
}

export const BottomMenu: FC<BottomMenuProps> = ({closeDropdown}) => {
  return (
    <ul className='pt-4 text-[13px]'>
      <Link to='auth/login' onClick={closeDropdown}>
        <li className='flex justify-between items-center py-3 cursor-pointer border-b border-b-slate-200'>
          <p>Sign In</p>
        </li>
      </Link>
      <Link to='/wishlist' onClick={closeDropdown}>
        <li className='flex justify-between items-center py-3 cursor-pointer border-b border-b-slate-200'>
          <p>Wishlist</p>
        </li>
      </Link>
    </ul>
  )
}
