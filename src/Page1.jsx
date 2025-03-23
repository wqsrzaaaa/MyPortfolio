import React from 'react'
import cartoon from './assets/cartoon3.webp'
import { PiCursorClickThin } from "react-icons/pi";


const Page1 = ({effectCursor , seteffectCursor}) => {
  return (
    <div className='w-full h-screen overflow-hidden front-page-bg relative'>
    
       <div id='bottom-shadow' className='w-full h-[80px] bg-black absolute z-90 bottom-0 left-0'></div>

        <div className=' w-full h-[200px] text-2xl md:text-3xl font-bold flex flex-col items-center justify-center absolute z-2 text-white bg-transparent'>
          <h1>Hello , I'm</h1>
          <p id='my-name' className=''>Waqas Raza</p>
          <p className='frontend-dev'>𝒶 𝒻𝓇𝑜𝓃𝓉𝑒𝓃𝒹 𝒹𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇</p>
        </div>



        <div className='w-full h-screen absolute top-0 left-0  overflow-hidden'>
        <section id='section'>
            <span></span>
            <span></span>
            <span></span>
        </section>
        </div>
        <img id='cartoon' className='absolute pointer-events-none bottom-0 shadow-lg left-1/2 -translate-x-1/2' src={cartoon} alt="" />
    

        <div 
            onClick={() => seteffectCursor(!effectCursor)} 
            title="Change Cursor"  
            className="w-[50px] h-[50px] text-2xl scale-30 hover:scale-100 transition-all duration-400 hidden lg:flex items-center justify-center rounded-full bg-white absolute bottom-10 right-5 cursor-pointer"
          >
            <PiCursorClickThin />
          </div>
</div>

    
  )
}

export default Page1