// package imports
import {Fade as Hamburger} from 'hamburger-react'

// react imports
import {FC} from 'react'

// UI imports
import {Button} from 'components/Ui'

interface HamburgerMenuButtonProps {
  openDropdown: () => void
  isOpenDropdown: boolean
}

export const HamburgerMenuButton: FC<HamburgerMenuButtonProps> = ({
  openDropdown,
  isOpenDropdown,
}) => {
  return (
    <>
      <Button onClick={() => openDropdown()} className='py-4 px-3 lg:hidden w-auto'>
        <Hamburger toggled={isOpenDropdown} direction='right' color='#686868' size={21} />
      </Button>
    </>
  )
}
