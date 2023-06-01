// React Imports
import {useState, useEffect, FC} from 'react'

// Feature Imports
import {ProductDetailModal} from './ProductDetailModal'
import {ProductModel} from '../models'
import {addFavoriteAction} from 'features/wishlist/wishlistAction'
import {getWishlistState} from 'features/wishlist'

// Package Imports
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import {getProductAction} from '../productAction'

// UI Imports
import {Button, Link, setLoadingAction} from 'components'

// Function Imports
import {slugify} from 'function'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

interface ProductListItemProps {
  product: ProductModel
}

export const ProductListItem: FC<ProductListItemProps> = ({product}) => {
  const [isHoverFavorite, setIsHoverFavorite] = useState(false)
  const [displayShowMore, setDisplayShowMore] = useState(false)
  const [isHoverImg, setIsHoverImg] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [clickShowMore, setClickShowMore] = useState(false)

  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(getWishlistState())

  const like = wishlist.find((item) => item.id === product.id)

  const showMoreClass = classNames(
    'absolute left-0 border-b border-b-primary-300 pb-1 hover:text-warning transition-all bg-white text-sm',
    {
      'translate-x-0 opacity-100': displayShowMore,
    },
    {
      '-translate-x-1 opacity-0': !displayShowMore,
    }
  )

  const absoluteImg = classNames(
    'w-full absolute transition-all duration-500 top-0 left-0',
    {
      'opacity-100': isHoverImg,
    },
    {
      'opacity-0': !isHoverImg,
    }
  )

  const {images, title, price} = product

  const slug = slugify(title)

  useEffect(() => {
    if (clickShowMore) {
      dispatch(getProductAction(slug))
        .then(() => {
          dispatch(setLoadingAction(true))
        })
        .finally(() => {
          setTimeout(() => {
            dispatch(setLoadingAction(false))
            setShowDetailModal(true)
          }, 1000)
        })
    }
  }, [clickShowMore])

  return (
    <>
      <div
        onMouseOver={() => setDisplayShowMore(true)}
        onMouseOut={() => setDisplayShowMore(false)}
        className='mt-10'>
        <Link to={`/product/${slug}`}>
          <div
            onMouseOver={() => setIsHoverImg(true)}
            onMouseOut={() => setIsHoverImg(false)}
            className='relative'>
            <img src={images[0]} alt='' />
            <img src={images[1]} alt='' className={absoluteImg} />
          </div>
        </Link>
        <div className='flex justify-between items-center mt-3'>
          <Link to={`/product/${slug}`} className='text-base text-primary-600 hover:text-primary'>
            {title}
          </Link>
          <FontAwesomeIcon
            onClick={() => dispatch(addFavoriteAction(product))}
            onMouseOver={() => setIsHoverFavorite(true)}
            onMouseOut={() => setIsHoverFavorite(false)}
            className={`cursor-pointer ${like && 'text-warning'}`}
            icon={isHoverFavorite || like ? faHeartSolid : faHeartRegular}
          />
        </div>
        <div className='relative'>
          <span className='text-sm'>${price}.00</span>
          <Button
            onClick={() => {
              setClickShowMore(true)
              document.body.style.overflow = 'hidden'
            }}
            className={showMoreClass}>
            Show More
          </Button>
        </div>
      </div>
      {showDetailModal && <ProductDetailModal modal setShowDetailModal={setShowDetailModal} />}
    </>
  )
}
