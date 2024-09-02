import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Avatar from "../image/Avatar.png";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdInterests } from "react-icons/md";

import { FaLanguage } from "react-icons/fa";
export default function ResumeTemplate() {
  const array = [
    {
      resumeId: "abc123",
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        address: "123 Main St, City",
      },
      summary:
        "A passionate software developer with experience in building web applications.Developed and maintained web applications using React and Node.js.A personal portfolio website showcasing my projects and skills.",
      education: [
        {
          institution: "University of Example",
          degree: "Bachelor of Science in Computer Science",
          startDate: "2018-09-01",
          endDate: "2022-06-01",
        },
      ],
      experience: [
        {
          company: "Example Corp",
          position: "Software Developer",
          startDate: "2022-07-01",
          endDate: "Present",
          description:
            "Developed and maintained web applications using React and Node.js.",
        },
      ],
      skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
      projects: [
        {
          name: "Portfolio Website",
          description:
            "A personal portfolio website showcasing my projects and skills.",
          link: "https://example.com",
        },
      ],
      certifications: [
        {
          name: "Certified JavaScript Developer",
          issuedBy: "Example Certifying Body",
          issueDate: "2021-08-01",
        },
      ],
      languages: [
        {
          language: "English",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#0F172A] w-full">
        <Navbar />
        <div>
          {array.map((item, index) => {
            return (
              <div className="container my-[50px] w-[80%]  bg-white flex gap-[30px] px-[50px]">
                <div className="w-[25%] flex flex-col h-[100%]  justify-evenly items-center gap-[10px] py-[10px]">
                  <div className="w-[200px] h-[200px]  border-2 border-dotted flex flex-col justify-center items-center border">
                    <img
                      src={Avatar}
                      alt="error"
                      className="w-[150px] h-[150px] "
                    />
                    <div className="text-xl">
                      {item.personalInfo.firstName} {item.personalInfo.lastName}
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
                          {item.personalInfo.phone}
                        </div>
                      </div>
                      <div className="flex w-full  h-[40px] justify-center items-center">
                        <div className="w-[20%] ">
                          <FaLocationDot className="w-[30px] h-[25px]" />
                        </div>
                        <div className="flex justify-start w-[50%] ">
                          {item.personalInfo.address}
                        </div>
                      </div>
                      <div className="flex w-full  h-[40px] justify-center items-center">
                        <div className="w-[20%] ">
                          <MdEmail className="w-[30px] h-[25px]" />
                        </div>
                        <div className="flex justify-start w-[50%] ">
                          {item.personalInfo.email}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                      Language{" "}
                    </div>
                    <div className="flex flex-col w-[100%] justify-evenly items-center">
                      {item.languages.map((loc, i) => {
                        return (
                          <div
                            className="flex w-full  h-[40px] text-lg justify-center items-center"
                            key={i}
                          >
                            <div className="w-[20%] ">
                              <FaLanguage className="w-[30px] h-[25px]" />
                            </div>
                            <div className="flex justify-start w-[50%] ">
                              {loc.language}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                      Hobbies
                    </div>
                    {item.skills.map((loc, i) => {
                      return (
                        <div
                          className="flex flex-col w-[100%] justify-evenly items-center"
                          key={i}
                        >
                          <div className="flex w-full  h-[40px] text-lg justify-center items-center">
                            <div className="w-[20%] ">
                              <MdInterests className="w-[30px] h-[25px]" />
                            </div>
                            <div className="flex justify-start w-[50%] ">
                              {loc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[70%] flex p-[30px] flex-col justify-evenly gap-[20px]  border-5 border-start">
                  <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                      About Me
                    </div>
                    <div className="w-[100%] text-lg font-normal">{item.summary}</div>
                  </div>
                  <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                      Education
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      {item.education.map((loc, i) => {
                        return (
                          <div className="w-[100%] text-lg border border-2 border-[#0F172A] p-[10px] ">
                            <div className="flex gap-[50px]">
                              <div className=" text-lg font-bold">
                                StartDate:
                                <span className=" text-md font-normal px-[10px]">
                                  {loc.startDate}
                                </span>
                              </div>
                              <div className="text-lg font-bold">
                                EndDate:
                                <span className=" text-md font-normal px-[10px]">
                                  {loc.endDate}
                                </span>
                              </div>
                            </div>
                            <div className="text-lg font-bold">
                              Institution:
                              <span className=" text-md font-normal px-[10px]">
                                {loc.institution}
                              </span>
                            </div>
                            <div className="text-lg font-bold">
                              Degree:
                              <span className=" text-md font-normal px-[10px]">
                                {loc.degree}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full h-[30%]  flex flex-col gap-[10px]">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[30%] ">
                      Work Experience
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      {item.experience.map((loc, i) => {
                        return (
                          <div className="w-[100%] text-lg border border-2 border-[#0F172A] p-[10px]">
                            <div className="flex gap-[50px]">
                              <div className=" text-lg font-bold">
                                StartDate:
                                <span className=" text-md font-normal px-[10px]">
                                  {loc.startDate}
                                </span>
                              </div>
                              <div className="text-lg font-bold">
                                EndDate:
                                <span className=" text-md font-normal px-[10px]">
                                  {loc.endDate}
                                </span>
                              </div>
                            </div>
                            <div className="text-lg font-bold">
                              Company:
                              <span className=" text-md font-normal px-[10px]">
                                {loc.company}
                              </span>
                            </div>
                            <div className="text-lg font-bold">
                              Position:
                              <span className=" text-md font-normal px-[10px]">
                                {loc.position}
                              </span>
                            </div>
                            <div className="text-lg font-bold">
                              Description:
                              <span className=" text-md font-normal px-[10px]">
                                {loc.description}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full h-[20%]  flex flex-col gap-[10px]">
                    <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                      Skills
                    </div>
                    <div className="grid grid-cols-3 w-[50%] gap-[10px]">
                      {item.skills.map((loc, i) => {
                        return (
                          <div className="w-[80%] flex items-center justify-center border border-info text-lg text-gray-500 font-semibold ">
                            {loc}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
