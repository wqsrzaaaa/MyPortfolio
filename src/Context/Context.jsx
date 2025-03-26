import { createContext } from "react"
import Redefine from '../assets/Redefine.jpeg'
import NeedleKnot from '../assets/NeedleKNotDesktop.png'
import CoffeClub from '../assets/CoffeeClub.png'
import Weather from '../assets/weather.png'
import Gsap from '../assets/Gsap.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import weathermbl from '../assets/weathermbl.jpg'
import redefinembl from '../assets/redefinembl.jpg'
import coffeembl from '../assets/coffeembl.jpg'
import needlembl from '../assets/needlembl.jpg'
import Gemini from '../assets/Gemini.png'
import Geminimbl from '../assets/Geminimbl.jpg'

const MyContext = createContext()


const Context = ({children}) => {

  let projects = [
    {
      title: "E-Commerce Website",
      name : "Needle&Knot" ,
      Weblink : "https://wqsrzaaaa.github.io/NeedleKnot/",
      date : "February 27, 2025",
      desc :" A fully functional e-commerce website with seamless UI/UX, smooth navigation, and responsive design. Built with React and Tailwind CSS, it includes features like product search, filtering, and a dynamic shopping experience." , 
      img: NeedleKnot ,
      imgMbl : needlembl,
      technologies: [ react ,tailwind , Gsap],
    },
    {
      title: "Redefine Gaming",
      name : "Redefine Gaming",
      date :"March 17, 2025",
      Weblink :"https://wqsrzaaaa.github.io/redefine/",
      desc : "An immersive platform delivering next-level gaming experiences with cutting-edge design and seamless functionality.",
      img: Redefine,
      imgMbl : redefinembl,
      technologies: [ react ,tailwind, Gsap],
    },
    {
      title: "Weather App",
      name : "Weather App" ,
      date : "March 8, 2025",
      Weblink :"https://wqsrzaaaa.github.io/weatherapp/",
      desc : "A simple and responsive weather app providing real-time updates, forecasts, and detailed climate insights for any location.",
      img: Weather,
      imgMbl : weathermbl,
      technologies: [ react ,  css],
    },
    {
      title: "Coffee Club",
      name : "Coffee Club",
      date: "March 12, 2025",
      Weblink : "https://wqsrzaaaa.github.io/CoffeeClub/",
      desc : " A perfect place for coffee lovers to explore flavors and enjoy great brews!",
      img: CoffeClub,
      imgMbl : coffeembl,
      technologies: [
         react , tailwind ,
        "https://lenis.darkroom.engineering/favicon.ico",
        Gsap,
      ],
    },
    {
      title: "Gemini Clone",
      name : "Gemini Clone",
      date: "March 25, 2025",
      Weblink : "https://wqsrzaaaa.github.io/GeminiClone/",
      desc : "A fully functional AI chatbot, built using React and API integration. This project simulates real-time conversations with AI, providing an interactive user experience.",
      img: Gemini,
      imgMbl : Geminimbl,
      technologies: [
         react , css , 
      ],
    },
  ];


  return (
    <MyContext.Provider value={projects}>
      {children}
    </MyContext.Provider>
  )
}

export {MyContext , Context}