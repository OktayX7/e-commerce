// react imports
import {FC} from 'react'

// UI imports
import {Link} from 'components/Ui'

export interface CategoryModuleProps {
  img: string
  imgClassName?: string
  spanClassname?: string
  spanText: string
  url: string
  closeDropdown?: () => void
}

export const scrollToCategory = () => {
  const category = document.getElementById('category')
  category?.scrollIntoView({behavior: 'smooth'})
}

export const CategoryModule: FC<CategoryModuleProps> = ({
  img,
  imgClassName,
  spanClassname,
  spanText,
  url,
  closeDropdown,
}) => {
  return (
    <li className='menu-desktop lg:pl-16'>
      <Link
        onClick={() => {
          closeDropdown && closeDropdown()
          scrollToCategory()
        }}
        to={url}>
        <img
          src={`/images/category-thumb-${img}.jpg`}
          alt={spanText}
          width={55}
          className={imgClassName}
        />
        <span className={spanClassname}>{spanText}</span>
      </Link>
    </li>
  )
}
