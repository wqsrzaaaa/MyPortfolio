import React from "react";
import { Link, NavLink  } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import skill from './assets/skill.jpg'

const MyRoute = () => {
  return (
    <nav>
   <ul className="flex Several-Links gap-5">
      <li>
        <NavLink className="Link flex" to="/home">
          <CiHome  id="img"  className="md:hidden !scale-200 block text-2xl" />
          <span className="md:block hidden">About</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="Link flex" to="/skills">
          <img  id="img" src={skill} className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Skills</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="Link flex" to="/work">
          <img id="img"  src="https://cdn-icons-png.flaticon.com/512/2593/2593066.png" className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Work</span>
        </NavLink>
      </li>
      <li>
      <NavLink className="Link flex" to="/contact">
        <IoCallOutline id="img"  className="md:hidden  !scale-150  block text-2xl" />
        <span className="md:block hidden">Contact</span>
      </NavLink>
      </li>
    </ul>
    </nav>
  );
};

export default MyRoute;
