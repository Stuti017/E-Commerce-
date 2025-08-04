import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-700'>
        {/* left side */}
        <div className='w-full sm:w1/2 flex item-center justify-center mt-40 py-10 sm:py-0'>
            <div className='text-black'>
                <div className='flex item-center gap-2 py-2'>
                    <p className='w-8  md:w-11 h-[2px] mt-3 bg-black'></p>
                    <p className='font-medium text-sm md:text-base'> OUR BESTSELLER</p>
                </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'> Latest Arrivals</h1>
                    <div className='flex item-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8  md:w-11 h-[2px] mt-3 bg-black'></p>
                    </div>
            </div>
        </div>
        {/* right side  */}
        <img src={assets.hero_img} className='w-full sm:w-1/2'></img>
    </div>
  )
}

export default Hero
