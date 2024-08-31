import React from "react";
import { useState } from "react";
import Ads from "./Ads";
import UIUX from "../image/ReactLogo.png";
import ReactCover from "../image/ReactCover.png";
import ReactPlayer from "react-player";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function PythonPlaylist({ Image }) {
  const python = [
    {
      id: 0,
      title: "The Complete React Course | Trailer ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus doloribus maiores magnam quam similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/_rTCzxg6VmM?si=Ho_RQBuKbGOLmQ8o",
    },
    {
      id: 1,
      title: " Why do we need React?  ",
      description:
        "Lorem ipsum dolor,  Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus doloribus maiores magnam quam similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/EsdfHKhiK-g?si=XcPXlTgzRMInEdCA",
    },
    {
      id: 2,
      title: "How Much JavaScript do We Need for React? ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus  similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/bRc63wrDaUg?si=TUQX1HdxIFCOCA6z",
    },
    {
      id: 3,
      title: "What is React Element? ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti  quam similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/k-jHi0USEQM?si=8pcbXWIiwOXptcp7",
    },
    {
      id: 4,
      title: " What is JSX? | Transform JSX with Babel ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus doloribus maiores magnam quam similique qui at ad rem porro temporibus voluptatib",
      link: "https://youtu.be/_ze46JgZpd4?si=fHV5kYzLMBAEK57i",
    },
    {
      id: 5,
      title: "How Source Maps Can Save You Time in React Development",
      description:
        "Lorem ipsum dolor, sit amet consectetur harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus doloribus maiores magnam quam similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/DOu5CJzo8rY?si=cn0q8Gtfq24FOxe5",
    },

    {
      id: 6,
      title: "ReactJS vs NextJS: Which One Should You Learn First? ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eius harum labore optio autem nihil eos minus saepe. Quisquam, numquam minus, dicta quae corrupti repellendus  similique qui at ad rem porro temporibus voluptatibus fugit eius officia!",
      link: "https://youtu.be/h_TGiSZnwz8?si=2rArI33eo5in8cDE",
    },
  ];
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (message) => {
    if (python[message].link === "") {
      setShow(true);
    } else {
      setShow(false);
      setCurrentIndex(message);
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
                  <div className="flex gap-[10px]">
                    <FaCircleUser className="w-[30px] text-sky-500 h-[30px]" />
                    <div className="text-sky-500">Developer</div>
                  </div>
                  <div className="flex gap-[10px]">
                    <button className=" border-none rounded text-white  px-[10px] py-[5px]">
                      <AiFillLike className="w-[20px] text-sky-500 h-[20px]" />
                      <span className="text-[#0F172A]">10k</span>
                    </button>
                    <button className=" border-none rounded text-white  px-[10px] py-[5px]">
                      <AiFillDislike className="w-[20px] text-sky-500 h-[20px]" />
                      <span className="text-[#0F172A]">1k</span>
                    </button>
                  </div>
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
