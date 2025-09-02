import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Category from './component/Category/Category'
import Category2 from './component/Category/Category2'
import Services from './component/Services/Services'
import Banner from './component/Banner/Banner'
import headphone from '../../frontend/src/assets/hero/headphone.png'
import Product from './component/Product/Product'


const BannerData ={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"18 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit baque reiciendis",
  bgColor:"#f42c37"
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Product/>

    </div>
  )
}

export default App
