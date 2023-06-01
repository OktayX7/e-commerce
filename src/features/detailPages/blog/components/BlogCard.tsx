// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faPlus} from '@fortawesome/free-solid-svg-icons'

// React Imports
import {Link} from 'react-router-dom'
import {FC} from 'react'

// Style Imports
import '../styles/image-hover.scss'

// Feature Imports
import {BlogModel} from '../models'

// Function Imports
import {slugify} from 'function'

interface CardProps {
  blog: BlogModel
}

export const Card: FC<CardProps> = ({blog}) => {
  const {title, contents} = blog

  const slug = slugify(title)

  return (
    <div className='mb-8 lg:mb-16 cursor-pointer'>
      <div className='group plus-icon-overlay h-3/4 w-4/4'>
        <Link to={`/blog/${slug}`}>
          <img src={contents[0].content} alt='img' className='h-full w-full' />
        </Link>
        <div className='group-hover:flex plus-icon text-warning font-thin'>
          <Link to={`/blog/${slug}`}>
            <FontAwesomeIcon icon={faPlus} className='text-7xl' />
          </Link>
        </div>
      </div>
      <div className='flex items-center mb-3 mt-3'>
        <hr className='border-gray-300 w-1/12 border-t-2 my-4' />
        <span className='ml-3 text-primary-400 text-xs'>August 12, 2015</span>
      </div>
      <h2 className='text-lg'>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className='text-sm text-primary-400 mt-3 '>{contents[2].content}</p>
      <Link to={`/blog/${slug}`} className='text-warning text-sm '>
        More <FontAwesomeIcon icon={faAngleRight} className='text-xs mt-3 ml-1' />
      </Link>
    </div>
  )
}
