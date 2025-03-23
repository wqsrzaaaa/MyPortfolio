import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./Page1";
import MyRoute from "./MyRoute";
import About from "./route/About";
import Work from "./route/Work";
import Skills from "./route/Skills";
import Contact from "./route/Contact";
import Error from "./route/Error";
import Portfolio from "./Context/Portfolio";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Lenis from "@studio-freight/lenis";
const App = () => {
  
  const [effectCursor, seteffectCursor] = useState(true)
  
    useEffect(() => {
      if(effectCursor === true){
        const moveCursor = (e) => {
          setTimeout(() => {
            const cursor = document.createElement("div");
            cursor.className = "custom-cursor";
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY + window.scrollY}px`;
  
            document.body.appendChild(cursor);
  
            setTimeout(() => {
              cursor.style.opacity = "0";
              cursor.remove();
            }, 500);
       
        })}
        
        
        document.addEventListener("mousemove", moveCursor);
        
        return () => {
          document.removeEventListener("mousemove", moveCursor);
        };
      }
    }, [effectCursor])
 
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,  // Adjust smoothness (default: 1.2)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        smoothWheel: true,
        smoothTouch: false,
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy(); // Cleanup to prevent memory leaks
      };
    }, []);
    
  return (
    <div style={{cursor : effectCursor === true ? 'none' : "initial"}} className="w-full relative ">
      <Router>
        <Page1 effectCursor={effectCursor} seteffectCursor={seteffectCursor} />
        <div id="Page2" className="w-full">
          <div className="w-full h-[200px] flex items-end justify-center gap-5">
            <div className="md:w-[60vh] w-[40vh]  h-[70px] bg-zinc-800 flex items-center justify-evenly links">
              <MyRoute />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route   to = "*" element={<Error />} />
         </Routes>

          <footer className="w-full h-[15vh] flex items-center justify-evenly text-white bg-zinc-950">
            <a className="flex flex-col md:flex-row items-center gap-2">
              <BiLogoGmail className="text-2xl" /> wqsrza07@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/waqas-raza-9981b2349/"
             className="flex flex-col md:flex-row  items-center gap-2">
              <FaLinkedin className="text-2xl" /> Waqas Raza
            </a>
            <a href="https://www.instagram.com/wqss.rz/" 
            className="flex flex-col md:flex-row  items-center gap-2">
              <FaInstagram className="text-2xl" /> wqs.rzz
            </a>
          </footer>
        </div>
      </Router>
    </div>
  );
};

export default App;
