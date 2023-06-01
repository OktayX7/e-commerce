// Feature Imports
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/slick.css'
import {SlickSettings} from './SlickSettings'
import {slickArr} from '../slickArr'
import {SlickItem} from './SlickItem'

// Package Imports
import Slider from 'react-slick'

export const Slick = () => {
  return (
    <>
      <div className='w-full xl:container'>
        <Slider {...SlickSettings}>
          {slickArr.map((slick) => (
            <SlickItem key={`slick_item_${slick.id}_${slick.title}`} {...slick} />
          ))}
        </Slider>
      </div>
    </>
  )
}
