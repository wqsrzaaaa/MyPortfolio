import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { MyContext } from '../Context/Context';
import { Navigate, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gamejs from './sourceCodes/Game'
import DiceRoller from './sourceCodes/DiceRoller';
gsap.registerPlugin(ScrollTrigger);


const Work = () => {





    

  const navigate = useNavigate()
  const Data = useContext(MyContext)
  
  

  useEffect(() => {
    let tl = gsap.timeline()
    tl.fromTo('#Projects' , 
      { backgroundColor: "transparent" , borderRadius : 0 }, 
      {
        backgroundColor: "#52525b", 
        borderRadius : "20px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#main",
          start: "top 25%",
          end: "bottom bottom",
        },
      }
    );
    tl.fromTo('#Project2' , 
      { backgroundColor: "transparent" , borderRadius : 0 }, 
      {
        backgroundColor: "#52525b", 
        borderRadius : "20px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#main",
          start: "top -95%",
          end: "bottom bottom",
        },
      }
    );

    return () => {
      tl.kill(); 
    };
  }, [])
  




  return (
    <>
    <div id='main' className='w-full relative '>
    <div className='w-[2px] lg:block hidden  h-full bg-zinc-600 fixed top-0 right-90'> 
      <div className='w-[20vh] h-[2px] bg-zinc-600 absolute top-[30vh] right-0'></div>
    </div>
       <div className='w-full h-screen flex flex-col items-center justify-center gap-9 text-white'>
     <h1 id='Projects' className='text-3xl !p-4 !pl-10 !pr-10 !mt-10  font-extrabold'>My Recent Projects</h1>

      <div className='w-full h-[80vh]  md:!px-4'>
      <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]} // ✅ NO Lazy module here
          className="mySwiper w-[95%] md:w-full h-[80vh]"
          breakpoints={{
            320: { slidesPerView: 1 },
            1080: { slidesPerView: 2 },
          }}
        >
          {Data.map((e, i) => (
            <SwiperSlide key={i} className="bg-zinc-800 flex !ml-0 relative items-center justify-center text-xl font-bold">
              <div className='w-full h-[50vh] relative flex items-center justify-center'>
                {/* ✅ Native lazy loading */}
                <img 
                  className='w-[95%] rounded-2xl h-[47vh] object-cover' 
                  src={e.img} 
                  loading="lazy" // ✅ Just add this
                  alt="" 
                />
                <div id='image-divs' className='absolute z-3 w-[350px] flex justify-center gap-3 -bottom-10'>
                  {e.technologies.map((TechIcon, index) => (
                    <div key={index} className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                      <img className='w-[60%]' src={TechIcon} loading="lazy" alt="" /> 
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-full h-[120px] flex items-center justify-center'>
                <h1>{e.title}</h1>
              </div>
              <button   onClick={() => {
                        navigate('/portfolio', { state: { 
                          title: e.title, 
                          img: e.img, 
                          imgMbl : e.imgMbl,
                          name : e.name,
                          desc : e.desc,
                          date : e.date,
                          Weblink : e.Weblink,
                          technologies: e.technologies.map(tech => 
                            typeof tech === "string" ? tech : tech.name
                          )
                        }});
                      }} 
                  className="btn absolute left-1/2 -translate-x-1/2 rounded-[10px] overflow-hidden -bottom-5">
                    <svg  width="150px" height="50px" viewBox="0 0 180 60" className="border ">
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span>Explore</span>
                  </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       </div>
       <DiceRoller/>
      <Gamejs/>
    </div>
    </>
  );
};

export default Work;
