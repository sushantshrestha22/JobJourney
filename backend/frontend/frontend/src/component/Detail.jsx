import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
// import axios from "axios";

export default function Detail({ company_name, job_name, location, requirement, description, salary, experience_level, skills, language, job_type, email, phone }) {
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/job/" )
  //     .then((res) => {setData(res.data);
  //     console.log(res.data)});

  // }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#0F172A] pt-[50px] w-[100%] flex flex-col justify-center items-center">
        <div className=" text-xl bg-[#0F172A] font-bold text-white">
          JOB DETAILS
        </div>
        <div className="container w-[60%] text-[#0F172A]  mt-[20px] py-[20px] bg-white shadow">
          <div className="  grid grid-cols-4 px-[20px] pb-[20px] gap-y-[30px] gap-x-[10%]">
            <div className="flex flex-col justify-center  ">
              <div className="text-xl font-bold">Company name:</div>
              <div className="text-lg">{company_name}</div>
            </div>
            <div className="flex flex-col justify-center    ">
              <div className="text-xl font-bold">Job Title:</div>
              <div className="text-lg"> {job_name}</div>
            </div>
            <div className="flex flex-col justify-center   ">
              <div className="text-xl font-bold">location:</div>
              <div className="text-lg"> {location}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Salary:</div>
              <div className="text-lg"> {salary}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Vacancy:</div>
              <div className="text-lg"> {requirement}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Experience level:</div>
              <div className="text-lg"> {experience_level}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Skills:</div>
              {skills.map((data,index)=>{
                return<>
                  <div className="text-lg"> {data}</div>
                </>
              })}
            
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Language:</div>
              <div className="text-lg"> {language}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="text-xl font-bold">Job Type:</div>
              <div className="text-lg">{job_type}</div>
            </div>

            <div className="flex flex-col justify-center w-[100%]  ">
              <div className="text-xl font-bold">Email:</div>
              <div className="text-lg">{email}</div>
            </div>
            <div className="flex flex-col justify-center w-[100%] col-span-2  ">
              <div className="text-xl font-bold">Phone number:</div>
              <div className="text-lg">{phone}</div>
            </div>
            <div className="flex flex-col justify-center w-[100%] col-span-2  ">
              <div className="text-xl font-bold">Description:</div>
              <div className="text-lg">{description}</div>
            </div>
          </div>
        </div>




        <div className="container flex justify-end mt-[20px]">
          <button className="btn btn-info text-white">Apply Now</button>
        </div>


      </div>
      <Footer />
    </>
  );
}
