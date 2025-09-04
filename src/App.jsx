import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Category from './component/Category/Category'
import Category2 from './component/Category/Category2'
import Services from './component/Services/Services'
import Banner from './component/Banner/Banner'
import headphone from '../../frontend/src/assets/hero/headphone.png'
import Product from './component/Product/Product'
import SmartWatch from '../../frontend/src/assets/category/smartwatch2-removebg-preview.png'
import Blogs from '../../frontend/src/component/Blogs/Blogs'
import Partners from '../../frontend/src/component/Partners/Partners'
import Footer from '../../frontend/src/component/Footer/Footer'
import Popup from '../../frontend/src/component/Popup/Popup'
import AOS from 'aos';
import 'aos/dist/aos.css';


const BannerData ={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"18 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit baque reiciendis",
  bgcolor:"#f42c37"
}

const BannerData2 ={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"18 Jan to 28 Jan",
  image:SmartWatch,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit baque reiciendis",
  bgcolor:"#2dcc6f"
}


const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
    console.log("Order popup state:", !orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay:100,
      offset:100,  
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Product/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} handleOrderPopup={handleOrderPopup}/>


    </div>
  )
}

export default App
