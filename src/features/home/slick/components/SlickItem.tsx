// React Imports
import {FC, useState} from 'react'

// Feature Imports
import {BaseModel} from 'models'

// Package Imports
import {useMediaQuery} from 'react-responsive'

// UI Imports
import {Link} from 'components/Ui'
import {scrollToCategory} from 'components/Layout/Header/category/components'

interface SlickItemProps extends BaseModel<number> {
  smImg: string
  title: string
  category: string
  mdImg: string
  mdTextColor: string
}

export const SlickItem: FC<SlickItemProps> = ({smImg, title, category, mdImg, mdTextColor}) => {
  const isSmallScreen = useMediaQuery({maxWidth: 768})
  const [dragging, setDragging] = useState(false)

  return (
    <div
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      className={`focus:outline-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'} md:relative`}>
      <img
        src={isSmallScreen ? smImg : mdImg}
        alt={title}
        className='
     w-full h-full object-contain 
    '
      />
      <div className='py-5 px-4 md:absolute md:bottom-[40%] md:left-[15%] md:w-2/6 md:p-[5%]'>
        <h1
          className={`text-[20px] md:text-[28px] ${isSmallScreen ? 'text-primary' : mdTextColor}`}>
          {title}
        </h1>
        <Link
          onClick={() => scrollToCategory()}
          to={`/product-category/${category.toLowerCase()}`}
          className='text-[#a1a1a1] hover:text-warning md:text-xl md:border-b-[1px] md:pb-1'>
          {category}
        </Link>
      </div>
    </div>
  )
}
