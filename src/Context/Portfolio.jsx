import React from 'react'
import { useLocation } from 'react-router-dom'

const Portfolio = () => {
 
  const loc = useLocation()
  const proj = loc.state

  

  return (
    <div className='w-full flex flex-wrap justify-center !pt-16'>
      <div className='md:w-[800px] w-[95%] flex items-center justify-center flex-col'>
        <div className='w-full'><img className='rounded-2xl shadow-div' src={proj.img} alt="" /></div>
        <div className='w-full md:!p-8 !pt-8 flex '>
          <img className='md:w-[300px] md:h-[480px] w-[200px] rounded-2xl bg-amber-200' src={proj.imgMbl} alt="" />    
          <div className='w-full flex gap-9 flex-col items-center justify-center text-white'>
            <h2 className='md:text-3xl text-2xl text-center font-extrabold'>Framework Used</h2> 
            <div className='w-full flex flex-col md:flex-row items-center gap-5 justify-center'>
            {proj.technologies.map((tech, index) => (
                <img  key={index} src={tech} alt="Tech Icon" className="w-12 h-12" />
              ))}
            </div> 
          </div>     
        </div>
      </div>
      <div className='lg:w-[35%] w-[95%] lg:min-h-0 h-[500px]  md:!pt-20 flex justify-center relative text-white'>
        <div className='lg:w-[400px] w-[90%] md:w-[70%] flex shadow-2xl  flex-col items-center text-center  gap-3 !p-3 h-[300px]  rounded-2xl relative lg:sticky top-20 bg-zinc-700'>
           <h3 className='text-2xl font-bold'>{proj.name}</h3>
           <p>{proj.desc}</p>
           <p><span className='Date text-2xl font-semibold'>Date</span> : {proj.date}</p>
          <a href={proj.Weblink}
          className='proj-btn relative w-[150px] h-[45px] bg-blue-900 flex items-center justify-center  rounded-[5px]'>View Project</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio