// React Imports
import {FC, useRef} from 'react'

// Package Imports
import Slider from 'react-slick'
import {
  faStar as solidStar,
  faCaretLeft,
  faCaretRight,
  faXmark,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Settings} from 'react-slick'

// UI Imports
import {Button} from 'components'
import {SocialMediaIcons} from 'components/SocialMediaIcons'

// Feature Imports
import {setIncrementAction, setDecrementAction} from '../productAction'
import {getProductState} from '../productSelector'
import {ArrowComponent} from 'features/home/slick/components'
import {addProductToCartAction, setShowAction} from 'features/cart/cartActions'
import {getWishlistState} from 'features/wishlist'

// Hook Imports
import {useAppSelector, useAppDispatch} from 'hooks'

// Style Imports
import '../../cart/style/cart.scss'
import {addFavoriteAction} from 'features/wishlist/wishlistAction'

interface ProductDetailModalProps {
  setShowModal?: (showModal: boolean) => void
  modal?: boolean
  setShowDetailModal?: (showDetailModal: boolean) => void
}

export const ProductDetailModal: FC<ProductDetailModalProps> = ({
  setShowModal,
  modal,
  setShowDetailModal,
}) => {
  const SlickSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: modal ? false : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000500,
    pauseOnHover: true,
    prevArrow: <ArrowComponent />,
    nextArrow: <ArrowComponent isNext />,
    customPaging: () => <div className='w-[6px] h-[6px] bg-[#aaa] rounded-full'></div>,
    appendDots: (dots) => <ul className='flex'>{dots}</ul>,
  }

  const product = useAppSelector(getProductState())
  const wishlist = useAppSelector(getWishlistState())

  const like = wishlist.find((item) => item.id === product.id)

  const smallImgRefs = useRef<HTMLImageElement[]>([])

  const handleSmallImgClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.classList.add('opacity-50')

    smallImgRefs.current.forEach((imgRef) => {
      if (imgRef !== target && imgRef.classList?.contains('opacity-50')) {
        imgRef.classList?.remove('opacity-50')
      }
    })

    const src = target.src
    const bigImg = document.querySelector('.slick-active img') as HTMLImageElement
    bigImg.src = src
  }

  const {id, title, price, discountPercentage, description, quantity, images, rating} = product

  const dispacth = useAppDispatch()

  const handleAddToCart = () => {
    dispacth(addProductToCartAction(product))
    setShowDetailModal && setShowDetailModal(false)
    dispacth(setShowAction(true))
    bodyScroll()
  }

  const bodyScroll = () => {
    const bodyOverflow = document.body.style.overflow
    if (bodyOverflow === 'hidden') {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      {modal && (
        <div
          onClick={() => {
            setShowDetailModal && setShowDetailModal(false)
            bodyScroll()
          }}
          className='fixed inset-0 z-40 bg-primary opacity-70'></div>
      )}
      <div
        className={`${
          modal
            ? 'fixed cart-container w-7/12 lg:w-4/5 xl:w-3/5 xl:left-[20%] h-full overflow-y-scroll lg:overflow-y-hidden top-0 2xl:top-14 left-[20%] lg:left-[10%] z-50'
            : ' lg:max-w-7xl lg:mx-auto'
        }`}>
        <div
          className={`flex flex-col lg:flex-row  ${
            modal && 'lg:flex-row-reverse bg-primary-100 shadow-2xl'
          }`}>
          {modal && (
            <Button
              onClick={() => {
                setShowDetailModal && setShowDetailModal(false)
                bodyScroll()
              }}
              className='text-2xl cursor-pointer absolute top-2 right-2 z-50 hover:text-primary-700'>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          )}

          {!modal && (
            <div className='px-3 pt-5 hidden lg:block'>
              {images &&
                images.map((image, index) => (
                  <img
                    onClick={handleSmallImgClick}
                    ref={(el) => (smallImgRefs.current[index] = el as HTMLImageElement)}
                    key={`${image}-${index}}`}
                    src={image}
                    alt='product'
                    width={70}
                    className='cursor-pointer'
                  />
                ))}
            </div>
          )}

          <div className={`${modal ? 'lg:w-2/3 2xl:w-1/2' : 'lg:w-1/2'}`}>
            <Slider {...SlickSettings} className='w-full h-full detail-slick'>
              {images &&
                images.map((image) => (
                  <img
                    onClick={() => setShowModal && setShowModal(true)}
                    key={image}
                    src={image}
                    className={`focus:outline-none ${
                      modal ? 'h-[682px] lg:h-[800px]' : 'cursor-zoom-in block mx-auto'
                    }`}
                  />
                ))}
            </Slider>
          </div>

          <div
            className={
              !modal
                ? 'md:max-lg:flex md:max-lg:gap-48 md:max-lg:container pt-10 px-4 lg:w-1/4 lg:mx-auto lg:pt-28 max-lg:pb-14'
                : 'p-9 flex flex-col lg:gap-48'
            }>
            <div>
              <h2 className='text-2xl'>{title}</h2>
              <div className='flex pt-3 pb-5'>
                <span className='text-sm line-through'>${price}</span>
                <h4 className='text-warning mx-2 text-xl'>
                  {discountPercentage
                    ? `$${price - (price * discountPercentage) / 100}`
                    : `${price}`}
                </h4>
                {discountPercentage && (
                  <span className='border border-primary-400 text-sm rounded-2xl px-2 py-1 text-primary-400'>
                    -{discountPercentage}%
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className='text-primary-500 pb-6'>{description}</p>
              <div className='mb-6 flex items-center'>
                {rating &&
                  Array.from(Array(rating)).map((_, index) => (
                    <FontAwesomeIcon key={index} icon={solidStar} className='text-warning ml-1' />
                  ))}
                {rating &&
                  Array.from(Array(5 - rating)).map((_, index) => (
                    <div key={index} className='w-2 h-2 bg-primary-400 rounded-full ml-2'></div>
                  ))}
              </div>
              <div className='border border-primary-400'>
                <div className='flex justify-between mx-4 my-2'>
                  <span>Quantity</span>
                  <span>
                    <Button
                      className='cursor-pointer pr-3'
                      onClick={() => {
                        quantity > 1 && dispacth(setDecrementAction(id))
                      }}>
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      className='cursor-pointer pl-3'
                      onClick={() => {
                        dispacth(setIncrementAction(id))
                      }}>
                      <FontAwesomeIcon icon={faCaretRight} />
                    </Button>
                  </span>
                </div>
                <Button
                  onClick={() => {
                    handleAddToCart()
                  }}
                  size='full'
                  color='primary'
                  className='py-2'>
                  Add to Card
                </Button>
              </div>
              <div className='pt-5 flex items-center'>
                <FontAwesomeIcon
                  onClick={() => dispacth(addFavoriteAction(product))}
                  icon={faHeart}
                  className={`text-lg cursor-pointer pr-3 mr-3 border-r border-r-primary-500 transition-colors duration-500 ${
                    like ? 'text-warning' : 'text-primary-500 hover:text-primary'
                  }`}
                />
                <SocialMediaIcons color='light' className='text-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
