import React from 'react'
import brand1 from '../../assets/brand/br-1.png'
import brand2 from '../../assets/brand/br-2.png'
import brand3 from '../../assets/brand/br-3.png'
import brand4 from '../../assets/brand/br-4.png'
import brand5 from '../../assets/brand/br-5.png'

const Partners = () => {
  return (
    <div data-aos="zoom-out" className='py-8 mt-24  md:block bg-gray-200 dark:bg-white/10'>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img src={brand1} alt="Brand 1" className='w-[80px]' />
                <img src={brand2} alt="Brand 2" className='w-[80px]' />
                <img src={brand3} alt="Brand 3" className='w-[80px]' />
                <img src={brand4} alt="Brand 4" className='w-[80px]' />
                <img src={brand5} alt="Brand 5" className='w-[80px]' />
            </div>
        </div>
    </div>
  )
}

export default Partners
