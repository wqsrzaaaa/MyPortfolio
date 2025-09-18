import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import frammer from '../assets/frammer.webp'
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },

];

const Frameworks = [
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-800" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300 " /> },
  { name: "Frammer Motion", icon: <img src={frammer} className="md:max-w-[90px] max-w-[60px] -m-7" /> },
]

const Skills = () => {
  return (
    <div className="w-full min-h-screen  text-white flex flex-col items-center py-10">

      <div className="flex flex-col items-center justify-evenly w-[90%]">

        <div className="w-full flex flex-col gap-5 text-center" >
          <h1 className="text-4xl font-extrabold">My expertise</h1>
          <p className="text-gray-400 About-Me mt-4 max-w-2xl mx-auto">
            I specialize in crafting dynamic, responsive, and span web applications using modern front-end technologies.
            With expertise in <span>React js</span>, <span>JavaScript</span>, and <span>UI/UX design</span>, I focus on <span>performance</span>, <span>accessibility</span>, and <span>clean</span> design
          </p>
        </div>

        <div className="w-full h-[30vh] gap-9 flex items-center justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
            >
              <div id={`index${index}`} className="md:text-5xl text-4xl mb-2 group-hover:animate-pulse">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly w-[90%]">

        <div className="w-full flex flex-col gap-5 text-center" >
          <h1 className="text-4xl font-extrabold">Frameworks & Tools </h1>
          <p className="text-gray-400 About-Me mt-4 max-w-2xl mx-auto">
            I also work with <span>state management</span>, <span>animations</span>, and styling <span>frameworks</span> to enhance user experience.
          </p>
        </div>

        <div className="w-full h-[30vh] gap-9 flex items-center justify-center">
          {Frameworks.map((skill, index) => (
            <div
              key={index}
              className="group2 pointer-events-none"
            >
              <div id={`index${index}`} className="text-4xl md:text-5xl mb-2 group-hover:animate-pulse">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
