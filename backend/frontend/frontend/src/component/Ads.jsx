import React from "react";
import UIUX from "../image/CoverPhoto.png";
import { FaStar } from "react-icons/fa";
export default function Ads({ Image ,title }) {
  return (
    <>
      <div className="container bg-white h-[85vh] py-[20px] items-center text-[#0F172A] flex flex-col gap-[20px]">
        <div className=" w-[90%] flex justify-center  h-[40vh]">
          <img src={Image} alt="error" className=" rounded w-full" />
        </div>
        <div className="flex flex-col w-[90%] justify-center  gap-[10px]">
          <div className="flex container  gap-[10px]">
            <FaStar className="text-cyan-400 w-[25px] h-[25px]" />
            <div className="text-[#0F172A] font-semibold text-xl  w-[90%]">
              Learn {title} from{" "}
              <span className="text-cyan-400">basic to advanced level</span>
            </div>
          </div>
          <div className="flex container gap-[10px]">
            <FaStar className="text-cyan-400 w-[25px] h-[25px]" />
            <div className="text-[#0F172A] font-semibold text-xl w-[90%]">
              Develop your{" "}
              <span className="text-cyan-400">
                analytical skills on  {title}{" "}
              </span>
              to become a stronger developer
            </div>
          </div>
          <div className="flex container gap-[10px]">
            <FaStar className="text-cyan-400 w-[25px] h-[25px]" />
            <div className="text-[#0F172A] font-semibold text-xl w-[90%]">
              <span className="text-cyan-400">Solve problems </span>asked in
              product-based companies interviews
            </div>
          </div>
          <div className="flex container gap-[10px]">
            <FaStar className="text-cyan-400 w-[25px] h-[25px]" />
            <div className="text-[#0F172A] font-semibold text-xl w-[90%]">
              Improve your
              <span className="text-cyan-400"> problem-solving skills</span> to
              become a stronger developer
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className=" xl:block xl:max-w-[90%] h-[70vh] shadow-xl shadow-slate-800 rounded">
    //   <div className="h-[35%] rounded-t-lg bg-white">
    //     <img src={UIUX} alt="error" className="w-full h-full rounded-t-md" />
    //   </div>
    //   <div className="container bg-[#0F172A] pt-[20px] h-[65%] rounded-b-lg flex flex-col gap-[10px] ">
    //     <div className="container flex items-center  gap-[10px]">
    //       <div className="text-white ">What you will learn in this course?</div>
    //     </div>
    //     <div className=" flex justify-evenly">
    //       <FaStar className="text-cyan-400 w-[25px] h-[25px]" />
    //       <div className="text-white  w-[85%]">
    //         Learn Data Structure and Algorithms from{" "}
    //         <span className="text-cyan-400">basic to advanced level</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
