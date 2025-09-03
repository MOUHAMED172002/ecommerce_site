import React from 'react'
import { FaLinkedin,FaInstagram, FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks =[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#",
    },
    {
        title:"Contact",
        link:"/#",
    },
    {
        title:"Blog",
        link:"/#",
    },
]
const Footer = () => {
  return (
    <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
            <div className='py-8 px-4'>
                <a href='#'
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                    <p className='text-gray-500 lg:pr-24 pt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <p>
                        Made with ❤️ by Afiss
                    </p>
                    <a href='#' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                        Privacy Policy
                    </a>
            </div>

            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pj-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3' >Important Links</h1>
                    <ul className='space-y-3' >
                        {FooterLinks.map((data,index)=>(<li key={index}>
                            <a href={data.link} className='text-gray-600 dark:text-gray-400   hover:text-white hover:text-black duration-300'>{data.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                {/* second col Links */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3' >Quicks Links</h1>
                    <ul className='space-y-3' >
                        {FooterLinks.map((data,index)=>(<li key={index}>
                            <a href={data.link} className='text-gray-600 dark:text-gray-400   hover:text-white hover:text-black duration-300'>{data.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                {/* Company Info */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left mb-3' >Address</h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Noida , Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                                <p>+91 12345 67890</p>
                            </div>

                            <div className='flex items-center gap-3 mt-6' >
                                <a href='#'>
                                    <FaInstagram className='text-2xl mt-6 hover:text-primary-500 duration-300' />
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-2xl mt-6 hover:text-primary-500 duration-300' />
                                </a>
                                <a href='#'>
                                    <FaLinkedin className='text-2xl mt-6 hover:text-primary-500 duration-300' />
                                </a>
                               
                            </div>
                         </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
