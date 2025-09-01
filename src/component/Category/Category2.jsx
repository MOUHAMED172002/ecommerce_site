import React from 'react'
import Images1 from '../../assets/category/gaming.png'
import Images2 from '../../assets/category/vr.png'
import Images3 from '../../assets/category/speaker.png'
import Button from '../../component/Shared/Button'

const Category2 = () => {
  return (
    <div className= ' py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

            {/* first column  */}
                <div className='py-10 pl-5 col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-100 text-black rounded-3xl relative h-[400px] flex items-end'>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]' >With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming</p>
                        <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'}  />
                    </div>
                    <img src={Images1} alt="Gaming" className='absolute bottom-4 right-0 w-[320px]  ' />
                </div>

                {/* second column  */}

                    <div className='py-10 pl-5 col-span-1 bg-gradient-to-br from-green-900 to-green-500 text-white rounded-3xl relative h-[400px] flex items-start'>
                        <div className='mb-4 '>
                            <p className='mb-[2px] text-white-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Virtual Reality</p>
                            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandGreen'}  />
                        </div>
                        <img src={Images2} alt="VR" className='absolute bottom-4 right-0 w-[320px]  ' />
                    </div>

                    {/* Third colun */}

                    <div className='py-10 pl-5 col-span-1 bg-gradient-to-br from-brandBlue/90 to-brandBlue/90 text-white rounded-3xl relative h-[400px] flex items-start'>
                        <div>
                            <div className='mb-10  '>
                                <p className='mb-[2px] text-white-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Audio</p>
                                <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandBlue'}  />
                            </div>

                        </div>
                        <img src={Images3} alt="Audio" className='absolute bottom-4 right-0 w-[320px]  ' />
                    </div>

            </div>



        </div>

    </div>
  )
}

export default Category2
