import React from 'react'
import me from '../assets/me2.jpg'
import { NavLink } from 'react-router-dom'


const About = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[100px] text-white text-3xl decoration-text flex items-end justify-center'>
        <h1>𝒜 𝐵𝒾𝓉 𝒜𝒷𝑜𝓊𝓉 𝑀𝑒</h1>
      </div>
      <div className='w-full flex !pt-15 flex-wrap'>
        <div className='lg:w-[500px] w-full lg:h-[80vh] lg:sticky relative top-0 flex-col gap-4 flex items-center justify-center '>
          <div  className='w-[150px] flex items-center border-3 border-b-blue-950 justify-center h-[150px] rounded-full overflow-hidden'>
            <img className='w-[95%] h-[95%] pointer-events-none rounded-full scale-180  object-cover object-start ' src={me} alt="" />
          </div>
          <h1 className='text-4xl text-white font-bold'>Waqas Raza</h1>
        </div>
        <div className='lg:w-[700px] w-[100%] text-center !p-4 gap-4 flex flex-col items-center justify-center '>
              <div className='w-full  flex flex-col items-center justify-center !pb-9 !pt-9 '>
              <p className='About-Me text-[20px] text-white'> Self-taught <span>Front-End Developer</span> with a passion for turning ideas into <span>sleek</span>, <span>interactive web experiences</span>.
                   I have hands-on experience with building dynamic <span>landing pages</span>, a fully functional <span>e-commerce platform</span>,
                  a <span>weather application</span>, and a <span>Gemini AI clone</span>. I am well versed with React, JavaScript, and UI/UX design.
                  a <span>weather application</span>, and a <span>Gemini AI clone</span>. I am well versed with <span>React</span>, <span>JavaScript</span>, and <span> UI/UX design</span>.
                  My primary focus is to constantly innovate and deliver engaging and efficient digital products.
                  </p>
              </div>
             <div className='w-full flex flex-col gap-8 items-center justify-center text-white'>
                <h1 className='text-3xl font-extrabold'> What i can do for you?</h1>
                <ul className='list-disc my-work text-start'>
                  <li><span>Build Stunning Websites</span> - Responsive, fast, and user-friendly designs.</li>
                  <li><span>Develop Interactive Web Apps </span> - Smooth, dynamic experiences using React & JavaScript.</li>
                  <li><span>Enhance UI/UX </span> - Clean, modern, and intuitive interfaces.</li>
                  <li><span>Optimize Performance </span>- Faster load times and better user engagement.</li>
                  <li><span>Bring Ideas to Life </span> - Turn your vision into a fully functional digital product..</li>
                </ul>
                <NavLink to={'/MyPortfolio/contact'} id='Contact-btn'>Let's create something amazing!</NavLink>
             </div>
        </div>
      </div>
    </div>
  )
}

export default About