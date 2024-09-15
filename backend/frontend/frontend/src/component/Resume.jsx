import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Resume() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [project, setProject] = useState("");

  // const [skill, setSkill] = useState('');
  // const [skills, setSkills] = useState([""]);

  const [errors, setErrors] = useState({});

  const validateFirstName = () => {
    const namePattern = /^[a-zA-Z]+$/;
    if (!first) {
      return "First name is required.";
    } else if (first.length < 3) {
      return "First name must be at least 3 characters long.";
    } else if (!namePattern.test(first)) {
      return "First name must not contain numbers or special characters.";
    }
    return "";
  };

  const validateLastName = () => {
    const namePattern = /^[a-zA-Z]+$/;
    if (!last) {
      return "Last name is required.";
    } else if (!namePattern.test(last)) {
      return "Last name must not contain numbers or special characters.";
    }
    return "";
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required.";
    } else if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePhone = () => {
    const phonePattern = /^(97|98)\d{8}$/;
    if (!phone) {
      return "Phone number is required.";
    } else if (!phonePattern.test(phone)) {
      return "Please enter a valid 10-digit Nepali phone number.";
    }
    return "";
  };

  const validateProject = () => {
    if (!project) {
      return "Project description is required.";
    } else if (project.length < 5) {
      return "Project description must be at least 5 characters long.";
    }
    return "";
  };

  const validateLocation = () => {
    if (!location) {
      return "Location is required.";
    }
    return "";
  };

  const validateDescription = () => {
    if (!description) {
      return "Description is required.";
    }
    return "";
  };

  const validateInstitution = () => {
    if (!institution) {
      return "Institution is required.";
    }
    return "";
  };


  const validateDegree = () => {
    if (!degree) {
      return "Degree is required.";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      first: validateFirstName(),
      last: validateLastName(),
      email: validateEmail(),
      phone: validatePhone(),
      location: validateLocation(),
      description: validateDescription(),
      institution: validateInstitution(),
      degree: validateDegree(),
      project: validateProject(),
    };
    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  function handelClick(event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Successfully submitted and is under review.");
      event.target.form.submit();
    }
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
                    value={first}
                    onChange={(e) => {
                      setFirst(e.target.value);
                    }}
                  />
                  {errors.first && (
                    <span className="text-red-500">{errors.first}</span>
                  )}
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
                    value={last}
                    onChange={(e) => {
                      setLast(e.target.value);
                    }}
                  />
                  {errors.last && <span className="text-red-500">{errors.last}</span>}
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
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {errors.phone && <span className="text-red-500">{errors.phone}</span>}
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
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
                  {errors.location && <span className="text-red-500">{errors.location}</span>}
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
                        checked
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
                    {errors.description && <span className="text-red-500">{errors.description}</span>}
                </div>
              </div>
            </div>
            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Your Education
                <hr></hr>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex flex-col gap-[10px] border-[#0F172A] border-2 border p-[20px] ">
                  <div className="flex gap-[20px] justify-center items-center ">
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3 ">
                      <label htmlFor="startDate">StartDate:</label>
                      <input
                        type="date"
                        id="startDate"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="startDate"
                        required
                      />
                    </div>
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="endDate">EndDate:</label>
                      <input
                        type="date"
                        id="endDate"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="endDate"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] justify-center items-center">
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="institution">Institution:</label>
                      <input
                        type="text"
                        id="institution"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="institution"
                        required
                      />
                       {errors.institution && <span className="text-red-500">{errors.institution}</span>}
                    </div>
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="degree">Degree:</label>
                      <input
                        type="text"
                        id="degree"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="degree"
                        required
                      />
                      {errors.degree && <span className="text-red-500">{errors.degree}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Your Work Experience
                <hr></hr>
              </div>
              <div className="grid grid-cols-1 gap-10">
                <div className="flex flex-col gap-[10px] border-[#0F172A] border-2 border p-[20px] ">
                  <div className="flex gap-[20px] justify-center items-center ">
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3 ">
                      <label htmlFor="startDate1">StartDate:</label>
                      <input
                        type="date"
                        id="startDate1"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="startDate1"
                        required
                      />
                    </div>
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="endDate1">EndDate:</label>
                      <input
                        type="date"
                        id="endDate1"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="endDate1"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] justify-center items-center">
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="company">Company:</label>
                      <input
                        type="text"
                        id="company"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="company"
                        required
                      />
                    </div>
                    <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                      <label htmlFor="position">Position:</label>
                      <input
                        type="text"
                        id="position"
                        className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                        name="position"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-50 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                    <label htmlFor="wdescription">Description:</label>
                    <input
                      type="text"
                      id="wdescription"
                      className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                      name="wdescription"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="skills">
                  Skills <sup className="text-xl font-bold">*</sup>
                </label>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[10px] justify-center items-center">
                    <input
                      type="text"
                      id="skill"
                      className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                      name="skill"
                      placeholder="Enter your skill"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="hobbies">
                  Hobbies <sup className="text-xl font-bold">*</sup>
                </label>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[10px] justify-center items-center">
                    <input
                      type="text"
                      id="hobbies"
                      className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                      name="hobbies"
                      placeholder="Enter your hobbies"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="project">
                  Project<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="url"
                  id="project"
                  name="project"
                  placeholder="enter your project link"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                  value={project}
                    onChange={(e) => setProject(e.target.value)}
                />
                 {errors.project && <span className="text-red-500">{errors.project}</span>}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handelClick}
                className="text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold"
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
