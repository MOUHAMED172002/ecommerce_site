import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../Shared/Button'

const Popup = ({orderPopup,handleOrderPopup}) => {
  return (
    <>
    {orderPopup && (
        <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md bg-white dark:text-white dark:bg-gray-900 p-4 rounded-md '>
            {/* Header section */}
            <div className='flex justify-between items-center '>
                <h1>Order Now</h1>
                <div>
                    <IoCloseOutline onClick={handleOrderPopup} className="text-2xl cursor-pointer" />
                </div>
            </div>

            {/* Popup section */}
            <div className="my-3">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <input type="text" placeholder="Address" className="form-input" />

                <div className='flex justify-center'>
                    <Button text="Order Now" bgColor={'bg-primary'} textColor={'text-white'} />
                </div>
            </div>
            </div>
        </div>
        </div>
    )}
    </>
  )
}

export default Popup
