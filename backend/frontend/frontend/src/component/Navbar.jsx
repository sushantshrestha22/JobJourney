import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="flex items-center text-white justify-between lg:px-[30px] h-[8vh]  w-full sticky top-0 bg-[#0F172A] border-bottom ">
      <div className="lg-px-[30px] text-3xl font-bold px-[50px] ">
        <NavLink to="/home" className="no-underline text-white">
          JobJourney
        </NavLink>
      </div>
      <div className="flex gap-[50px] font-semibold px-[50px] lg:text-xl">
        <NavLink to="/home" className="no-underline text-white">
          Home
        </NavLink>
        <NavLink to="/Resume" className="no-underline text-white">
          Resume
        </NavLink>
        <NavLink to="/JobPost" className="no-underline text-white">
          JobPost
        </NavLink>
        <NavLink to="/Resource" className="no-underline text-white">
          Resource
        </NavLink>
        <NavLink to="/Jobtracking" className="no-underline text-white">
          Jobtracking
        </NavLink>
      </div>
    </nav>
  );
}
