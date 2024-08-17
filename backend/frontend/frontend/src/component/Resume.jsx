import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Resume() {
  return (
    <>
      <div className="w-screen bg-[#0F172A]">
        <Navbar />
        <div className="mt-5  flex justify-center">
          <form
            method="POST"
            action="http://127.0.0.1:8000/JobPost/"
            className="bg-white py-[5vh] w-[70%] px-[50px]"
          >
            <div className="flex justify-center text-[#0F172A] lg:text-3xl sm:text-2xl font-bold ">
              Create Your Resume
            </div>
            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Yourself
                <hr></hr>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-4 ">
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="firstname">
                    First Name<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your firstname"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="lastname">
                    Last Name<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="contactnumber">
                    Contact No<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="contactnumber"
                    name="contactnumber"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="email">
                    Email<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your email"
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
                    placeholder="Enter your location"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="education">
                    Education<sup className="text-xl font-bold">*</sup>
                  </label>
                  <select
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    name="education"
                  >
                    <option value="SEE" selected>
                      SEE
                    </option>
                    <option value="+2">+2</option>
                    <option value="bachelors">Bachelor</option>
                    <option value="master">Master</option>
                  </select>
                </div>
                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="gender">
                    Gender<sup className="text-xl font-bold">*</sup>
                  </label>
                  <select
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    name="gender"
                  >
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
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
                    <option value="fresher" selected>
                      Fresher
                    </option>
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
                  <select
                    name="jobtype"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  >
                    <option value="part-time" selected>
                      Part-time
                    </option>
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
               Create Resume
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
