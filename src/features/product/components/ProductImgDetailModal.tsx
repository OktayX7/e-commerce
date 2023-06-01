/* eslint-disable indent */

// Package Imports
import classNames from 'classnames'
import Slider from 'react-slick'
import {Settings} from 'react-slick'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

// React Imports
import {FC} from 'react'

// Feature Imports
import {ArrowComponent} from 'features/home/slick/components'

interface ProductImgDetailModalProps {
  productImages: string[]

  onClose: () => void
}

export const ProductImgDetailModal: FC<ProductImgDetailModalProps> = ({productImages, onClose}) => {
  const SlickSettings: Settings = {
    dots: true,
    infinite: false,
    fade: true,
    speed: 500,
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

  const overlayClass = classNames('fixed', 'inset-0', 'z-50', 'bg-white', 'opacity-90')
  const modalClass = classNames(
    'bg-white, fixed',
    'top-0',
    'transform',
    'w-[100%]',
    'md:w-[70%]',
    'lg:w-[60%]',
    'xl:w-[50%]',

    'z-50',
    'px-10',
    'left-1/2',
    '-translate-x-1/2'
  )
  return (
    <>
      <div className={overlayClass} onClick={onClose} />
      <FontAwesomeIcon
        icon={faXmark}
        className='fixed right-3 top-3 z-50 cursor-pointer text-2xl text-primary-700'
        onClick={onClose}
      />
      <div className={modalClass}>
        <Slider {...SlickSettings} className='detail-slick w-full h-full'>
          {productImages &&
            productImages.map((image, index) => (
              <div key={index} className='focus:outline-none'>
                <img src={image} alt='product' className='cursor-grab h-screen w-full' />
              </div>
            ))}
        </Slider>
      </div>
    </>
  )
}
