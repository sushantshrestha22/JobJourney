import React, { useEffect, useState } from "react";
import axios from "axios";

const JobSearch = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setMyData(res.data.users);
      console.log(res.data.users);
    });
  }, []);

  return (
    <div className="bg-[#0F172A] flex justify-center box-border">
      <div className="bg-white w-[80%] grid grid-cols-3 gap-5 px-[30px] ">
        {myData.map((post) => {
          const { firstName, lastName, age, gender, id } = post;
          return (
            <div key={id} className="container  bg-white flex w-[80%] justify-evenly">
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
