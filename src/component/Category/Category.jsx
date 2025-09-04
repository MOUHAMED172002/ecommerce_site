import React from 'react'
import Images1 from '../../assets/category/earphone.png'
import Images2 from '../../assets/category/watch.png'
import Images3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* first column */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[400px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px] ' >With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}  />
                    </div>
                </div>
                <img src={Images1} alt='' className='w-[320px] absolute bottom-0' />
            </div>
            {/* second column */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandyellow to-brandyellow/90 text-white rounded-3xl relative h-[400px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white-600 '>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px] ' >With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandyellow"}  />
                    </div>
                </div>
                <img src={Images2} alt='' className='w-[320px] absolute -right-4 lg:top-[40px]' />
            </div>
            {/* third column */}
            <div className=' sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative  h-[400px] grid-cols-2 flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white-400 '>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px] ' >With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                        <Button text="Browse" bgColor={"bg-white"} textColor={"text-primary"}  />
                    </div>
                </div>
                <img src={Images3} alt='' className='w-[320px] absolute top-1/2 right-0 -translate-y-1/2' />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Category
