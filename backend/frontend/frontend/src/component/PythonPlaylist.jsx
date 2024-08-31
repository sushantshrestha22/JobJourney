import React from "react";
import { useState } from "react";
import Ads from "./Ads";
import PythonCover from"../image/PythonCover.png"
import UIUX from "../image/Logo.png";
import ReactPlayer from "react-player";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function PythonPlaylist() {
  const python = [
    {
      id: 0,
      title: "Variables & Data Types",
      description:
        "Variables in Python are used to store data values. A variable is created the moment you assign a value to it. Python is dynamically typed, meaning you don't need to declare the variable type explicitly.Python's data types are essential for handling various kinds of data. Integers represent whole numbers, while floats manage decimal numbers. ",
      link: "https://youtu.be/t2_Q2BRzeEE?si=V1jRSyPU1H-5sH5b",
    },
    {
      id: 1,
      title: " Strings & Conditional Statements ",
      description:
        "In Python, strings are sequences of characters used to represent text, enclosed in quotes. You can perform various operations on strings, such as concatenation, slicing, and formatting. Strings are immutable, meaning they cannot be changed after creation. In Python, strings are sequences of characters used to represent text, enclosed in quotes.",
      link: "https://youtu.be/lIId8IDP6TU?si=B4R6wQWR6q-2s-P0",
    },
    {
      id: 2,
      title: "List & Tuple in Python",
      description:
        "In Python, lists and tuples are both used to store collections of items, but they have some key differences.Both data structures allow for various operations like indexing, slicing, and iteration, but their mutability makes lists more flexible for use cases where data might change, while tuples are ideal for static data that should remain constant.",
      link: "https://youtu.be/qVyvmzFxF_o?si=5IrNf_AzwD6ucnkI",
    },
    {
      id: 3,
      title: "Functions & Recursion in Python ",
      description:
        "Functions are blocks of code designed to perform a specific task. They are defined using the def keyword, followed by a function name and parentheses. Functions can accept arguments (inputs) and return values (outputs). They help organize code, improve readability, and enable reuse of code across different parts of a program.",
      link: "https://youtu.be/OvTH-7ESoRA?si=yOg7XtkxqQtT5yge",
    },
    {
      id: 4,
      title: " Dictionary & Set in Python",
      description:
        "Dictionaries are unordered and mutable, meaning you can change, add, or remove key-value pairs after the dictionary is created.Sets are unordered collections of unique elements, meaning no duplicates are allowed.While dictionaries are focused on mapping relationships between keys and values, sets are focused on the uniqueness and membership of elements.",
      link: "https://youtu.be/078tYSD7K8E?si=LKZe8lMf4_IYAYhl",
    },
    {
      id: 5,
      title: "Loops in Python | While & For Loops",
      description:
        "In Python, loops allow you to execute a block of code repeatedly. The two primary types of loops are while loops and for loops.Both types of loops provide a way to automate repetitive tasks, with while loops being more flexible but potentially less predictable, and for loops being more straightforward for iterating over known sequences.",
      link: "https://youtu.be/S73thl0AyFU?si=n5XSHeYbXPTfFGmI",
    },

    {
      id: 6,
      title: "List & Tuple in Python",
      description: "",
      link: "",
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
            <Ads Image={PythonCover} title="python"/>
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
                      <AiFillLike className="w-[20px] text-sky-500 h-[20px]"/>
                      <span className="text-[#0F172A]">10k</span>
                    </button>
                    <button className=" border-none rounded text-white  px-[10px] py-[5px]">
                      <AiFillDislike className="w-[20px] text-sky-500 h-[20px]"/>
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
              className="flex  text-[#0F172A] shadow-md rounded shadow-gray-700 justify-between w-[40vw] "
            >
              <div className="rounded-l-md flex flex-col bg-white shadow">
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
                <div className="line-clamp-2 text-md font-semibold text-gray-500  h-[7vh]">{data.description}</div>
                
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
