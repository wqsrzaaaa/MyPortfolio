import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MyContext } from '../Context/Context';
import { Navigate, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import diceRoller from '../assets/diceRoller.mp4'
const Work = () => {


  const diceRoll = `
  import React, { useState } from 'react';
  
  const App = () => {
    const [Num, setNum] = useState(1);
    const [Num2, setNum2] = useState(1);
    const [IsRolling, setIsRolling] = useState(false);
  
    const random = () => {
      setIsRolling(true);
      setTimeout(() => {
        setIsRolling(false);
        setNum(Math.floor(Math.random() * 6) + 1);
      }, 1000);
    };
  
    const random2 = () => {
      setTimeout(() => {
        setNum2(Math.floor(Math.random() * 6) + 1);
      }, 1000);
    };
  
    const diceNum = Array.from({ length: Num });
    const diceNum2 = Array.from({ length: Num2 });
    const isShaking = \`\${IsRolling ? "dice" : ""}\`;
  
    return (
      <div id="main">
        <div id="dice-roller">
          <div id="dice" className={isShaking}>
            {diceNum.map((_, i) => (
              <div key={i} id="dice-num">
                <div id="dice-num-part"></div>
              </div>
            ))}
          </div>
          <div id="dice" className={isShaking}>
            {diceNum2.map((_, i) => (
              <div key={i} id="dice-num">
                <div id="dice-num-part"></div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              random();
              random2();
            }}
            id="shuffle"
          >
            Shuffle
          </button>
        </div>
      </div>
    );
  };
  
  export default App;
  `;

  const diceStyles = `*{
    margin: 0%;
    padding: 0%;
  }
  body{
    overflow: hidden;
  }
  #main{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(185, 185, 185);
  }
  #dice-roller{
    width: 100vh;
    height: 60vh;
    background: rgb(55, 55, 55);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    position: relative;
    perspective: 1000px;
  }
  #dice{
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: center;
    align-items: center;
  }
  .dice{
    animation: rotate 1s linear;
  }
  @keyframes rotate {
    0%{ transform: rotateX(0deg) rotateY(0deg); }
    10%{ transform: rotateX(360deg) rotateY(360deg); }
    20%{ transform: rotateX(0deg) rotateY(0deg); }
    30%{ transform: rotateX(360deg) rotateY(360deg); }
    40%{ transform: rotateX(0deg) rotateY(0deg); }
    50%{ transform: rotateX(360deg) rotateY(360deg); }
    60%{ transform: rotateX(0deg) rotateY(0deg); }
    70%{ transform: rotateX(360deg) rotateY(360deg); }
    80%{ transform: rotateX(0deg) rotateY(0deg); }
    90%{ transform: rotateX(360deg) rotateY(360deg); }
    100%{ transform: rotateX(0deg) rotateY(0deg); }
  }
  #shuffle{
    width: 150px;
    height: 45px;
    background: rgb(235, 180, 78);
    position: absolute;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 20px black;
    cursor: cell;
    top: 80%;
    left: 50%;
    transform: translate(-50%);
  }
  #dice-num{
    min-width: 45px;
    flex-shrink: 0;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #dice-num-part{
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
  }`;


  const navigate = useNavigate()
  const Data = useContext(MyContext)

  return (
    <>
       <div className='w-full h-screen flex flex-col items-center justify-center gap-9 text-white'>
      <h1 className='text-3xl font-extrabold'>My Recent Projects</h1>

      <div className='w-full h-[80vh]  md:!px-4'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true} 
          pagination={{
            clickable: true, 
            dynamicBullets: true, 
          }}
          modules={[Pagination]}
          className="mySwiper w-[95%] md:w-full h-[80vh]"
          breakpoints={{
            320: { slidesPerView: 1 },
            1080: { slidesPerView: 2 },
          }}
        >
          {Data.map((e , i)=> (
            <SwiperSlide key={i} className="bg-zinc-800 flex !ml-0 relative items-center justify-center text-xl font-bold">
            <div  className='w-full h-[50vh] relative flex items-center justify-center '>
               <img className='w-[95%] rounded-2xl h-[47vh]  object-cover' src={e.img} alt="" />
                <div id='image-divs' className='absolute z-3 w-[350px] flex justify-center gap-3 -bottom-10'>
                {e.technologies.map((TechIcon, index) => (
                  <div key={index} className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <img className='w-[60%]' src={TechIcon} alt="" /> 
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
       <div className='w-full flex flex-col text-white items-center'>
        <div className='md:h-[30vh] h-[15vh]  text-3xl  flex items-end font-extrabold'>Some Source Codes</div>
        
          <div className='w-full flex items-center justify-center !pt-16 '>
            <div className='w-full flex items-center flex-col gap-5 '>
              <video autoPlay muted loop className='w-[90%] object-center h-[55vh] lg:h-[75vh] ' src={diceRoller}></video>
              <h1 className='text-3xl font-bold'>Dice Roller</h1>
            </div>
          </div>
         
          <div className='w-full !pt-9 flex flex-wrap justify-center !pb-9 gap-5'>
          <div className='md:w-[600px]  w-[95%]  flex flex-col items-center gap-5'>
              <p>HTML</p>
              <SyntaxHighlighter
                className ='w-full h-[80vh] overflow-y-scroll'
                  language="javascript"
                  style={oneDark}
                  wrapLongLines={true} 
                  showLineNumbers 
                >
                  {diceRoll}
                </SyntaxHighlighter>
          </div>
           <div className='md:w-[600px] w-[95%]  flex flex-col items-center gap-5'>
           <p>CSS</p>
              <SyntaxHighlighter
                className ='w-full h-[80vh] overflow-y-scroll'
                language='javascript'
                style={oneDark}
                wrapLongLines={true}
                showLineNumbers
                >
                    {diceStyles}              
                </SyntaxHighlighter>
           </div>
          </div>
       </div>
    </>
  );
};

export default Work;
