import React from "react";
import Ads from "./Ads";
import PythonCover from "../image/PythonCover.png";
import ReactCover from "../image/ReactCover.png";

export default function AllPlaylist() {
    const array = [
        { course: "Python Development", cover: PythonCover,target:"python"},
        { course: "React Development", cover: ReactCover },
        { course: "Python Development ", cover: PythonCover },
        { course: "React Development", cover: ReactCover },
      ];



  const handleClick=(info)=>{
switch(info){

    case "python":

}

  }
  return (
    <div className="bg-[#0F172A] ">
      <div className="container grid grid-cols-3  gap-[20px] py-[10px]">
        {array.map((data, index) => {
          return (
            <>
              <div key={index} className="  bg-white flex flex-col text-[#0F172A] text-xl font-bold justify-center items-center  h-[45vh]" onClick={() => handleClick(data.course)}>
                <div>
                  <img src={data.cover} alt="error" className="h-[30vh]" />
                </div>
                <div className="flex w-[85%] justify-between border-2 items-center my-[10px] ">
                  <div>{data.course}</div>
                  <div>
                    <button className="btn btn-info text-white">Details</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
