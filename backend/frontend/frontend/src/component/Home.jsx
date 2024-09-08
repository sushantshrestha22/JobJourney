import React, { useEffect, useState } from "react";
import Home_Img from "../image/home.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { MdArtTrack } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import Navbar from "./Navbar";

export default function Home() {
 

  const card = [
    {
      logo: <MdArtTrack className="h-[80px] w-[80px]" />,
      title: "Jobtracking",
      detail:
        "Stay organized and in control of your job search with our job application tracker.",
    },
    {
      logo: <GrResources className="h-[60px] w-[60px]" />,
      title: "Resource",
      detail:
        "Enhance your skills and advance your career with our curated courses.",
    },
    {
      logo: <BiSolidDetail className="h-[60px] w-[60px]" />,
      title: "Resume",
      detail: "Craft professional resumes in minutes with our resume builder.",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />

      <div className="flex w-full bg-[#0F172A] items-center gap-[10%] h-[92vh]">
        <div className="w-[50%] ml-[10%]  xl:ml-[100px]">
          <div className=" ">
            <div className="lg:text-5xl sm:text-4xl sm:font-bold lg:font-extrabold text-white">
              WELCOME !!!
            </div>
            <div className="lg:text-5xl sm:text-4xl mt-3 font-bold text-white">
              The <span className="text-blue-500 ">Easiest Way</span>
            </div>
            <div className="lg:text-5xl sm:text-4xl mt-3 font-bold text-white ">
              to Get Your New Job
            </div>
            <div className=" mt-3 sm:text-sm lg:text-lg w-[100%] text-gray-400">
              Each month, more than 3 million job seekers tum to website in
              their search for work, making over 100 applications every
              single day.
            </div>
          </div>

          <button
            type="button"
            className="text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
          >
            <Link
              to="/jobSearch"
              className="text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold text-decoration-none"
            >
              Search Job
            </Link>
          </button>
        </div>
        <div className="lg:w-[40%]  flex items-center ">
          <img
            src={Home_Img}
            alt="error"
            className="  lg:h-[400px] lg:w-[400px]"
          ></img>
        </div>
      </div>
      <div className="bg-white flex justify-center gap-[50px] h-[50vh] items-center">
        {card.map((data,i) => {
          return (
            <div key={i} className="bg-[#0F172A] text-white w-[30%] rounded h-[40vh] flex gap-[20px] flex-col items-center justify-center p-[20px]">
              <div className="">{data.logo}</div>
              <div className="text-xl font-bold text-white">{data.title}</div>
              <div className="text-white text-lg text-center">
                {data.detail}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
