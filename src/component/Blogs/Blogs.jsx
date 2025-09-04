import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogsData =[
    {
        id:1,
        title:"How to choose perfect smartwatch?",
        subtitle:"minima facere deserunt vero illo deleniti eius dolores consequntur , eligendi corports maiores nolestiae laudantium Parro", 
        published:"jan 20, 2024 by Dilshad",
        image:Img1,
        aosDelay:100
    },
    {
        id:2,
        title:"How to choose perfect smartwatch?",
        subtitle:"minima facere deserunt vero illo deleniti eius dolores consequntur , eligendi corports maiores nolestiae laudantium Parro", 
        published:"jan 20, 2024 by Dilshad",
        image:Img2,
        aosDelay:150
    },
    {
        id:3,
        title:"How to choose perfect smartwatch?",
        subtitle:"minima facere deserunt vero illo deleniti eius dolores consequntur , eligendi corports maiores nolestiae laudantium Parro", 
        published:"jan 20, 2024 by Dilshad",
        image:Img3,
        aosDelay:300
    }
]

const Blogs = () => {
  return (
    <div className='px-12'>
        {/* Heading Section */}
        <Heading title={'Our Blogs'} subtitle={'Read Our Latest Blogs'} />
        {/* Body Section */}

        <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 '>
            {
                BlogsData.map((data)=>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='bg-white dark:bg-gray-900'>
                        {/* Image section */}
                        <div className="overflow-hidden rounded-2xl mb-2 ">
                            <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 ' src={data.image}/>
                        </div>
                        <div className="space-y-2">
                            <p className=" text-xs text-gray-500">{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Blogs
