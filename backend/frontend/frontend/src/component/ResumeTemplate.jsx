import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Avatar from "../image/Avatar.png";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLanguage } from "react-icons/fa";

export default function ResumeTemplate() {

  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/resume/")
      .then((res) => {
        const data = res.data;
        const lastIndex = data.length - 1;
        setLastItem(data[lastIndex]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="bg-[#0F172A] w-full">
        <Navbar />
        <div className="text-[#0F172A]">
          {lastItem && (
            <div className="container my-[50px] w-[80%]  bg-white flex gap-[30px] px-[50px]">
              <div className="w-[25%] flex flex-col h-[100%]  justify-evenly items-center gap-[10px] py-[10px]">
                <div className="w-[200px] h-[200px]  border-2 border-dotted flex flex-col justify-center items-center border">
                  <img
                    src={lastItem.profile_image}
                    alt="error"
                    className="w-[150px] h-[150px]"
                  />
                  <div className="text-xl">
                    {lastItem.first_name} {lastItem.last_name}
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                    Contact
                  </div>
                  <div className="flex flex-col w-[100%] h-full justify-evenly items-center">
                    <div className="flex w-full  h-[40px]  justify-center items-center">
                      <div className="w-[20%] ">
                        <MdContactPhone className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start w-[50%] ">
                        {lastItem.contact_number}
                      </div>
                    </div>
                    <div className="flex w-full  h-[40px] justify-center items-center">
                      <div className="w-[20%] ">
                        <FaLocationDot className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start w-[50%] ">
                        {lastItem.location}
                      </div>
                    </div>
                    <div className="flex w-full  h-[40px] justify-center items-center">
                      <div className="w-[20%] ">
                        <MdEmail className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start w-[50%] ">
                        {lastItem.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                    Language{" "}
                  </div>
                  <div className="flex flex-col w-[100%] justify-evenly items-center">
                    <div className="flex w-full  h-[40px] text-lg justify-center items-center">
                      <div className="w-[20%] ">
                        <FaLanguage className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start w-[50%] ">
                        {lastItem.language}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                    Hobbies
                  </div>

                  <div className="flex flex-col w-[100%] justify-evenly items-center">
                    <div className="flex w-full  h-[40px] text-lg justify-center items-center">
                      <div className="w-[20%] ">
                        <MdInterests className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start w-[50%] ">
                        {lastItem.hobbies}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[70%] flex p-[30px] flex-col justify-evenly gap-[20px]  border-5 border-start">
                <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                    About Me
                  </div>
                  <div className="w-[100%] text-lg font-normal">
                    {lastItem.description}
                  </div>
                </div>
                <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                    Education
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="w-[100%] text-lg border border-2 border-[#0F172A] p-[10px] ">
                      <div className="flex gap-[50px]">
                        <div className=" text-lg font-bold">
                          StartDate:
                          <span className=" text-md font-normal px-[10px]">
                            {lastItem.education_start_date}
                          </span>
                        </div>
                        <div className="text-lg font-bold">
                          EndDate:
                          <span className=" text-md font-normal px-[10px]">
                            {lastItem.education_end_date}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-bold">
                        Institution:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.institution}
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        Degree:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.degree}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[30%] ">
                    Work Experience
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="w-[100%] text-lg border border-2 border-[#0F172A] p-[10px]">
                      <div className="flex gap-[50px]">
                        <div className=" text-lg font-bold">
                          StartDate:
                          <span className=" text-md font-normal px-[10px]">
                            {lastItem.work_experience_start_date}
                          </span>
                        </div>
                        <div className="text-lg font-bold">
                          EndDate:
                          <span className=" text-md font-normal px-[10px]">
                            {lastItem.work_experience_end_date}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-bold">
                        Company:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.company}
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        Position:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.position}
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        Description:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.work_description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[20%] mt-[10px] flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                    Skills
                  </div>
                  <div className="grid grid-cols-3 w-[50%] gap-[10px]">
                    <div className="w-[80%] flex items-center justify-center border border-info text-lg text-gray-500 font-semibold ">
                      {lastItem.skills}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end container">
          <button className="btn btn-success">Download</button>
        </div>
        <Footer />
      </div>
    </>
  );
}
