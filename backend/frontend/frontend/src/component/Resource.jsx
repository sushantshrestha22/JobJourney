import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import PythonCover from "../image/PythonCover.png";
import ReactCover from "../image/ReactCover.png";
import PythonPlaylist from "./PythonPlaylist";
import ReactPlaylist from "./ReactPlaylist";
import AllPlaylist from "./AllPlaylist";

const Resource = () => {
  const array = [
    { target: "All" },
    { target: "Python", course: "Python Development", cover: PythonCover },
    { target: "React", course: "React Development", cover: ReactCover },
  ];
  const [myData, setMyData] = useState(false);
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [Click, setClick] = useState("All");

  const handleClick = (message) => {
    setClick(message);
    switch (message) {
      case "All":
        setShowAll(true);
        setMyData(false);
        setShow(false);
        break;
      case "Python":
        setMyData(true);
        setShow(false);
        setShowAll(false);
        break;
      case "React":
        setShow(true);
        setMyData(false);
        setShowAll(false);
        break;
      default:
    }
  };
  useEffect(() => {
    setShowAll(true);
    setMyData(false);
    setShow(false);
  }, []);

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/users").then((res) => {
  //     setMyData(res.data.users);
  //     console.log(res.data.users);
  //   });

  //   // axios.get("http://127.0.0.1:8000/api/job/").then((res) => {
  //   //   setMyData(res.data);
  //   //   console.log(res.data);
  //   // });
  // }, []);

  return (
    <div className="bg-[#0F172A]">
      <Navbar />
      <div className="px-[50px] bg-[#0F172A] flex justify-start gap-[10px] items-center py-[20px]">
        {array.map((data, index) => {
          return (
            <button
              className={`
                ${
                  Click === data.target
                    ? "btn btn-info text-white"
                    : "btn btn-secondary text-white"
                }
`}
              key={index}
              onClick={() => handleClick(data.target)}
            >
              {data.target}
            </button>
          );
        })}
      </div>
      {showAll && (
        <div>
          <div className="bg-[#0F172A] ">
            <div className="px-[50px] grid grid-cols-3  gap-[20px] py-[10px]">
              {array.slice(1).map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="  bg-white flex flex-col text-[#0F172A] text-xl font-bold justify-center items-center  h-[45vh]"
                      onClick={() => handleClick(data.course)}
                    >
                      <div>
                        <img
                          src={data.cover}
                          alt="error"
                          className="h-[30vh]"
                        />
                      </div>
                      <div className="flex w-[85%] justify-between border-2 items-center my-[10px] ">
                        <div>{data.course}</div>
                        <div>
                          <button
                            className="btn btn-info text-white"
                            onClick={() => handleClick(data.target)}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {myData && (
        <div>
          <PythonPlaylist />
        </div>
      )}
      {show && (
        <div>
          <ReactPlaylist />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Resource;
