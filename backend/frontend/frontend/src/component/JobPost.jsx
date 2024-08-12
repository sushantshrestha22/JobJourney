import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function JobPost() {
  return (
    <div className="w-screen bg-[#0F172A]">
      <Navbar />
      <div className="mt-5  flex justify-center">
        <form action="" className="bg-white py-[5vh] w-[70%] px-[50px]">
          <div className="flex justify-center text-[#0F172A] lg:text-3xl sm:text-2xl font-bold ">
            Post for Job
          </div>
          <div>
            <div className=" text-[#0F172A] text-xl mt-5">
              Tell Us About Your Job
              <hr></hr>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-4 ">
              <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                <label htmlFor="jobname">
                  Job Name<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="jobname"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your job title"
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="location">
                  Location<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="location"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your address"
                />
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="description">
                  Description<sup className="text-xl font-bold">*</sup>
                </label>
                <textarea
                  type="text"
                  id="description"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your job description"
                />
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="salary">
                  Salary<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="salary"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your job salary"
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" text-[#0F172A] text-xl mt-5">
              What Are The Job Requirement?
              <hr></hr>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="experience">
                  Experience level<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="experience"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your experience level"
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="skill">
                  Skills<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="skill"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your skills"
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="language">
                  Language<sup className="">(optional)</sup>
                </label>
                <input
                  type="text"
                  id="language"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4  rounded outline-none"
                  placeholder="enter your languages"
                />
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="project">
                  Project<sup className="">(optional)</sup>
                </label>
                <input
                  type="file"
                  id="project"
                  className=" bg-[#0F172A] border-none text-white text-sm py-2 px-4  rounded outline-none"
                  placeholder="enter your projects"
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="jobtype">
                  Job Type<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="jobtype"
                  className=" bg-[#0F172A] border-none text-white py-2 px-4 rounded outline-none"
                  placeholder="enter your job type"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
