import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const JobSearch = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setMyData(res.data.users);
      console.log(res.data.users);
    });
  }, []);

  return (
    <div className="bg-[#0F172A] flex flex-col items-center justify-center box-border">
      <Navbar/>
      <div className="w-[80%] p-4 grid grid-cols-4 gap-4">
        <select className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none">
          <option value="part-time">Part-time</option>
          <option value="full-time">Full-time</option>
          <option value="freelance">Freelance</option>
        </select>
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
              className=" text-lg rounded bg-blue-200 border-none py-1 px-4 text-[#0F172A] font-semibold"
            >
             search
            </button>
      </div>
      <div className="bg-white w-[80%] grid grid-cols-3 gap-5 p-[30px] ">
        {myData.map((post) => {
          const { firstName, lastName, age, gender, id } = post;
          return (
            <div
              key={id}
              className="container flex w-[80%] justify-evenly"
            >
              <div className="bg-white rounded-md border border-2 border-black w-[350px] h-[40hv] p-3 text-white ">
                <div className="px-[10px] rounded bg-[#0F172A] h-[30vh] flex flex-col justify-center gap-[20px] ">
                  <div className="flex ">
                    <div>{firstName}</div>
                  </div>
                  <div className="text-4xl font-bold">{lastName}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="border bg-transparent text-white rounded h-[30px]  text-sm">
                      {age}
                    </button>
                    <button className="border bg-transparent text-white rounded h-[30px] text-sm">
                      {gender}
                    </button>
                    <button className="border bg-transparent text-white rounded h-[30px] text-sm">
                      {gender}
                    </button>
                    {/* <button className="border bg-transparent text-white rounded h-[30px] text-sm">skills</button> */}
                  </div>
                </div>
                <div className="flex pt-4 justify-between items-center ">
                  <div className="text-[#0F172A] px-[20px] font-semibold ">
                    <div>Salary</div>
                    <div>Location</div>
                  </div>
                  <button className="bg-[#0F172A] text-white rounded h-[30px] text-sm w-[100px]">
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobSearch;
