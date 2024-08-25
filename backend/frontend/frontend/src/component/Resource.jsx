import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./footer";

const Resource = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setMyData(res.data.users);
      console.log(res.data.users);
    });

    // axios.get("http://127.0.0.1:8000/api/job/").then((res) => {
    //   setMyData(res.data);
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div className="bg-[#0F172A] w-full flex flex-col items-center justify-center box-border">
      <Navbar />
      <form method="POST" action="http://127.0.0.1:8000/api/search-jobs/">
        <div className=" p-4 grid grid-cols-4 gap-4">
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="Enter your job title"
            required
          />
          <input
            type="text"
            id="location"
            name="location"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="enter location"
            required
          />
          <input
            type="text"
            id="skill"
            name="skill"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="enter skills"
            required
          />
          <button
            type="submit"
            className="text-lg rounded bg-blue-200 border-none py-1 px-4 text-[#0F172A] font-semibold"
          >
            Search
          </button>
        </div>
      </form>
      <div className="bg-white w-[80%] grid grid-cols-2 gap-5 p-[30px] ">
        {myData.map((post) => {
          const {
            company_name,
            job_name,
            experience_level,
            skills,
            salary,
            location,
            id,
          } = post;
          return (
            <div key={id} className="container flex w-[80%] justify-evenly">
              <div className="bg-white rounded-md border border-2 border-black w-full h-[40hv] p-3 text-white ">
                <div className="px-[20px] rounded bg-[#0F172A] h-[35vh] flex flex-col justify-center gap-[20px] ">
                  <div className="flex ">
                    <div className="text-lg">{company_name}</div>
                  </div>
                  <div className="text-4xl font-bold">{job_name}</div>
                  <div className="flex flex-wrap gap-[10px]">
                    <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                      Project Work
                    </button>
                    <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                      {experience_level}
                    </button>
                    <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                      {skills}
                    </button>
                    {/* <button className="border bg-transparent text-white rounded h-[30px] text-sm">skills</button> */}
                  </div>
                </div>
                <div className="flex pt-4 justify-between items-center ">
                  <div className="text-[#0F172A] px-[20px] font-semibold ">
                    <div className="font-bold italic	">Rs{salary}k/monthly</div>
                    <div>{location}</div>
                  </div>
                  <button className=" text-lg rounded bg-[#0F172A] border-none py-1 px-4 text-white ">
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Resource;
