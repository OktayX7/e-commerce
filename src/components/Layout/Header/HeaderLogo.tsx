// UI Imports
import {Link} from 'components/Ui'

export const HeaderLogo = () => {
  return (
    <Link
      to='/'
      className='py-4 px-3 lg:mr-28 hover:scale-125 transform transition-all duration-500 ease-in-out'>
      <img src='/images/logo.png' alt='logo' width={112.48} height={16} />
    </Link>
  )
}
