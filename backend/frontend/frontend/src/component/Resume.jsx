import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { MdDelete } from "react-icons/md";

export default function Resume() {
  const [experience, setExperience] = useState([""]);
  const [skill, setSkill] = useState([""]);
  const [education, setEducation] = useState([""]);
  const [hobbies, setHobbies] = useState([""]);
  function handelClick1() {
    setExperience([...experience, ""]);
  }
  function handelClick2() {
    setSkill([...skill, ""]);
  }
  function handelClick3() {
    setEducation([...education, ""]);
  }
  function handelClick4() {
    setHobbies([...hobbies, ""]);
  }

  function handelDelete1(item, index) {
    const List = [...experience];
    List.splice(index, 1);
    setExperience(List);
  }
  function handelDelete2(item, index) {
    const List = [...skill];
    List.splice(index, 1);
    setSkill(List);
  }
  function handelDelete3(item, index) {
    const List = [...education];
    List.splice(index, 1);
    setEducation(List);
  }
  function handelDelete4(item, index) {
    const List = [...hobbies];
    List.splice(index, 1);
    setHobbies(List);
  }

  return (
    <>
      <div className="w-full bg-[#0F172A] ">
        <Navbar />
        <div className="mt-5  flex justify-center">
          <form
            method="POST"
            action="http://127.0.0.1:8000/resume/"
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
                    type="number"
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
                <div className="text-[#0F172A]  text-xl  flex flex-col gap-3 ">
                  <label htmlFor="language" className="font-bold">
                    Language<sup className="">(optional)</sup>
                  </label>
                  <div className="flex gap-[10px]">
                    <div>
                      <input
                        type="checkbox"
                        id="english"
                        name="language"
                        value="english"
                      />
                      <label for="english"> English</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="nepali"
                        name="language"
                        value="nepali"
                      />
                      <label for="nepali">Nepali</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="Others"
                        name="language"
                        value="Others"
                      />
                      <label for="Others"> Others</label>
                    </div>
                  </div>
                </div>

                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="gender">
                    Gender<sup className="text-xl font-bold">*</sup>
                  </label>
                  <select
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    name="gender"
                  >
                    <option value="male">Male</option>
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
                    placeholder="only 150 characters"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Your Education
                <hr></hr>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                  <label htmlFor="experience">
                    Work Experience<sup className="text-xl font-bold">*</sup>
                  </label>
                  <div className="flex flex-col gap-[10px]">
                    {experience.map((item, i) => {
                      return (
                        <div className="flex gap-[10px] justify-center items-center">
                          <input
                            key={i}
                            type="text"
                            id="experience"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                            name="experience"
                            placeholder="Enter your experience level"
                            required
                          />
                          {experience.length > 1 && (
                            <button
                              onClick={handelDelete1}
                              className=" text-lg rounded  bg-red-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
                            >
                              <MdDelete className="h-[30px] w-[30px]" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {experience.length < 4 && (
                    <button
                      onClick={handelClick1}
                      className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
                <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                  <label htmlFor="education">
                    Education<sup className="text-xl font-bold">*</sup>
                  </label>
                  <div className="flex flex-col gap-[10px]">
                    {education.map((item, i) => {
                      return (
                        <div className="flex gap-[10px] justify-center items-center">
                          <input
                            key={i}
                            type="text"
                            id="education"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                            name="education"
                            placeholder="Enter your education"
                            required
                          />
                          {education.length > 1 && (
                            <button
                              onClick={handelDelete3}
                              className=" text-lg rounded  bg-red-200 border-none  py-2 px-4 text-[#0F172A] font-semibold"
                            >
                              <MdDelete className="h-[30px] w-[30px]" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {skill.length < 4 && (
                    <button
                      onClick={handelClick3}
                      className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
                <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                  <label htmlFor="skills">
                    Skills <sup className="text-xl font-bold">*</sup>
                  </label>
                  <div className="flex flex-col gap-[10px]">
                    {skill.map((item, i) => {
                      return (
                        <div className="flex gap-[10px] justify-center items-center">
                          <input
                            key={i}
                            type="text"
                            id="skill"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                            name="skill"
                            placeholder="Enter your skill"
                            required
                          />
                          {skill.length > 1 && (
                            <button
                              onClick={handelDelete2}
                              className=" text-lg rounded  bg-red-200 border-none  py-2 px-4 text-[#0F172A] font-semibold"
                            >
                              <MdDelete className="h-[30px] w-[30px]" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {skill.length < 4 && (
                    <button
                      onClick={handelClick2}
                      className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
                <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                  <label htmlFor="hobbies">
                    Hobbies <sup className="text-xl font-bold">*</sup>
                  </label>
                  <div className="flex flex-col gap-[10px]">
                    {hobbies.map((item, i) => {
                      return (
                        <div className="flex gap-[10px] justify-center items-center">
                          <input
                            key={i}
                            type="text"
                            id="hobbies"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                            name="hobbies"
                            placeholder="Enter your hobbies"
                            required
                          />
                          {hobbies.length > 1 && (
                            <button
                              onClick={handelDelete4}
                              className=" text-lg rounded  bg-red-200 border-none  py-2 px-4 text-[#0F172A] font-semibold"
                            >
                              <MdDelete className="h-[30px] w-[30px]" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {hobbies.length < 4 && (
                    <button
                      onClick={handelClick4}
                      className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="project">
                    Project<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="url"
                    id="project"
                    name="project"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold">
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
