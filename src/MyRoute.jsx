import React from "react";
import { Link, NavLink  } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


const MyRoute = () => {
  return (
    <nav>
   <ul className="flex Several-Links gap-5">
      <li>
        <NavLink className="Link flex" to="/home">
          <CiHome className="md:hidden block text-2xl" />
          <span className="md:block hidden">About</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="Link flex" to="/skills">
          <img src="data:image/png;base64,...yourImage" className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Skills</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="Link flex" to="/work">
          <img src="https://cdn-icons-png.flaticon.com/512/2593/2593066.png" className="md:hidden w-[25px] block text-2xl" />
          <span className="md:block hidden">Work</span>
        </NavLink>
      </li>
      <li>
      <NavLink className="Link flex" to="/contact">
        <IoCallOutline className="md:hidden block text-2xl" />
        <span className="md:block hidden">Contact</span>
      </NavLink>
      </li>
    </ul>
    </nav>
  );
};

export default MyRoute;
