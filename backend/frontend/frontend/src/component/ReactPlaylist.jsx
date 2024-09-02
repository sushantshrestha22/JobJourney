import React, { useState, useEffect } from "react";
import axios from "axios";
import Ads from "./Ads";
import UIUX from "../image/ReactLogo.png";
import ReactCover from "../image/ReactCover.png";
import ReactPlayer from "react-player";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

// http://127.0.0.1:8000/api/react/
export default function PythonPlaylist({ Image }) {
  const [python, setPython] = useState([]);
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/react/")
      .then(response => {
        setPython(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  const handleClick = (index) => {
    if (python[index].link === "") {
      setShow(true);
    } else {
      setShow(false);
      setCurrentIndex(index);
    }
    console.log("clicked");
  };
  return (
    <div className="flex justify-evenly bg-[#0F172A] h-screen   ">
      <div className="py-[20px] w-[45vw]">
        {show ? (
          <div className="">
            <Ads Image={ReactCover} title="react" />
          </div>
        ) : (
          <div className="">
            <div className="container flex flex-col py-[20px] h-[85vh] bg-white gap-[10px] ">
              <div className="flex justify-center">
                <ReactPlayer
                  url={python[currentIndex].link}
                  controls
                  className=""
                  width={640}
                  height={360}
                />
              </div>

              <div className="container flex flex-col h-[24vh] justify-evenly   text-[#0F172A] ">
                <div className="text-xl flex justify-between font-semibold ">
                  {/* <div className="flex gap-[10px]">
                    <FaCircleUser className="w-[30px] text-sky-500 h-[30px]" />
                    <div className="text-sky-500">Developer</div>
                  </div> */}
                  {/* <div className="flex gap-[10px]">
                    <button className=" border-none rounded text-white  px-[10px] py-[5px]">
                      <AiFillLike className="w-[20px] text-sky-500 h-[20px]" />
                      <span className="text-[#0F172A]">10k</span>
                    </button>
                    <button className=" border-none rounded text-white  px-[10px] py-[5px]">
                      <AiFillDislike className="w-[20px] text-sky-500 h-[20px]" />
                      <span className="text-[#0F172A]">1k</span>
                    </button>
                  </div> */}
                </div>
                <div className="text-xl  font-bold ">
                  {python[currentIndex].title}
                </div>
                <div className="text-md font-semibold text-gray-500 ">
                  {python[currentIndex].description}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[20px] my-[20px] rounded bg-white overflow-auto p-[20px] h-[85vh] border border-2 ">
        {python.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="flex  text-[#0F172A]  border shadow-md rounded shadow-gray-700 justify-between w-[40vw] "
            >
              <div className="rounded-l-md ">
                <img
                  src={UIUX}
                  alt="error"
                  height={100}
                  width={150}
                  className="rounded-l-md "
                />
              </div>
              <div className="w-[70%] flex flex-col justify-evenly">
                <div className="text-xl font-bold ">{data.title}</div>
                <div className="line-clamp-2 text-md font-semibold text-gray-500  h-[7vh]">
                  {data.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
