import React from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {

    const [theme,setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'ligth');

    const element = document.documentElement;

    React.useEffect(()=>{
        localStorage.setItem("theme", theme);theme === 'dark'? element.classList.add('dark'): element.classList.remove('dark')
    })

  return (
    <div className='relative'>
        <img 
        onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 absolute right-0 z-10 cursor-pointer ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`} src={LightButton} alt='Light Mode' />

        <img className='w-12 cursor-pointer' src={DarkButton} alt='Dark Mode' />

    </div>
  )
}

export default DarkMode
