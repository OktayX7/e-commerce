// Feature Imports
import {Card} from './BlogCard'
import {getBlogsAction} from '../blogAction'
import {getBlogsState} from '../blogSelector'

// React Imports
import {NavLink, useParams} from 'react-router-dom'
import {useEffect} from 'react'

// Style Imports
import '../styles/blog.scss'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

export const BlogPage = () => {
  const categories = [
    {
      id: 1,
      name: 'All',
      url: '/blog',
    },
    {
      id: 2,
      name: 'Design',
      url: '/category/design',
    },
    {
      id: 3,
      name: 'Inspiration',
      url: '/category/inspiration',
    },
    {
      id: 4,
      name: 'Products',
      url: '/category/products',
    },
  ]

  const dispatch = useAppDispatch()
  const blogs = useAppSelector(getBlogsState())

  useEffect(() => {
    dispatch(getBlogsAction())
  }, [])

  const {category} = useParams<{category: string}>()

  const filterBlogs = (category: string) =>
    blogs.filter((blog) =>
      blog.category.includes(category.charAt(0).toUpperCase() + category.slice(1))
    )

  const blogsFiltered = category ? filterBlogs(category) : blogs

  return (
    <>
      <ul className='flex max-[400px]:flex-col max-[400px]:space-x-0  max-[550px]:space-x-4 mt-7 mb-24 pl-4 container max-w-7xl'>
        {categories.map((category, index) => (
          <li key={`${category.name}__${category.id}`} className='text-primary-400 text-lg'>
            <NavLink to={category.url} className='hover:text-warning'>
              {category.name}
            </NavLink>
            {index !== categories.length - 1 && <span className='mx-2 max-[550px]:hidden'>/</span>}
          </li>
        ))}
      </ul>

      <div className='container px-4 md:justify-between grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl '>
        {blogsFiltered && blogsFiltered.map((blog, index) => <Card key={index} blog={blog} />)}
        {!blogsFiltered && blogs.map((blog, index) => <Card key={index} blog={blog} />)}
      </div>
    </>
  )
}
