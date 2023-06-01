// Feature Imports
import {ArrowComponent} from './SlickArrow'

// Package Imports
import {Settings} from 'react-slick'

export const SlickSettings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  prevArrow: <ArrowComponent />,
  nextArrow: <ArrowComponent isNext />,
  customPaging: () => <div className='w-[6px] h-[6px] bg-[#aaa] rounded-full'></div>,
  appendDots: (dots) => <ul className='flex'>{dots}</ul>,
}
