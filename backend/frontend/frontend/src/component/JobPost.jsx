import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function JobPost() {
  return (
    <div className="w-screen bg-[#0F172A]">
      <Navbar />
      <div className="mt-5  flex justify-center">
        <form
          method="POST"
          action="http://127.0.0.1:8000/jobpost/"
          className="bg-white py-[5vh] w-[70%] px-[50px]"
        >
          <div className="flex justify-center text-[#0F172A] lg:text-3xl sm:text-2xl font-bold ">
            Post for Job
          </div>
          <div>
            <div className=" text-[#0F172A] text-xl mt-5 font-bold">
              Tell Us About Your Job
              <hr></hr>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-4 ">
              <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                <label htmlFor="companyname">
                  Company Name<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="companyname"
                  name="companyname"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your job title"
                  required
                />
                </div>
              <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                <label htmlFor="jobname">
                  Job Title<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="jobname"
                  name="jobname"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your job title"
                  required
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="location">
                  Location<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="salary">
                  Salary<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Job salary in multiple of 1000"
                  required
                />
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="description">
                  Description<sup className="text-xl font-bold">*</sup>
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your job description"
                  required
                />
              </div>
             
            </div>
          </div>
          <div>
            <div className=" text-[#0F172A] text-xl mt-5 font-bold">
              What Are The Job Requirement?
              <hr></hr>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="experience">
                  Experience level<sup className="text-xl font-bold">*</sup>
                </label>
                  <select  
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  name="experience"
                  >
                  <option value="fresher" selected>Fresher</option>
                  <option value="1/2 years">1/2 years</option>
                  <option value="3years">3years</option>
                </select>
                {/* <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="Enter your experience level"
                /> */}
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="skill">
                 Skills <sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your skills"
                  required
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="language">
                  Language<sup className="">(optional)</sup>
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your languages"
                 
                />
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="jobtype">
                  Job Type<sup className="text-xl font-bold">*</sup>
                </label>
                <select  name="jobtype"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  >
                  <option value="part-time" selected>Part-time</option>
                  <option value="full-time">Full-time</option>
                  <option value="freelance">Freelance</option>
                </select>
                {/* <input
                  type="text"
                  id="jobtype"
                  name="jobtype"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  placeholder="Enter your job type"
                /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
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
