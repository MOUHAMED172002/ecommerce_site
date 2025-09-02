import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { FaCarSide ,FaWallet, FaCircleCheck } from 'react-icons/fa6'


const ServiceData =[
    {
        id:1,
        icon:<FaCarSide className="text-4xl md:text-5xl text-primary"/>,
        title:'Free Shipping',
        description: "Free Shipping On All Order"

    },
    {
        id:2,
        icon:<FaCircleCheck className='text-4xl md:text-5xl text-primary'/>,
        title:'Safe Money',
        description:'30 Days Money Back'
    },
    {
        id:3,
        icon:<FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title:"Online Support 24/7",
        description:"Technical Support 24/7"
    },
    {
        id:4,
        icon:<FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title:"Secure Payment",
        description:"All payment Secure"
    },
    
]

const Services = () => {
  return (
    <div>
        <div className='container mt-14 md:mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {
                    ServiceData.map((data)=>(
                        <div >
                            
                            {data.icon}
                            <div className='flex flex-col items-start truncate sm:flex-row gap-4 '>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                            </div>
                        </div>
                    ))
                }
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
