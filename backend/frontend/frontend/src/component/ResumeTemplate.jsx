import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Avatar from "../image/Male.png";
import Avatar1 from "../image/Female.png";
import { MdContactPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLanguage } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeTemplate() {
  const pdfRef = useRef();

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

  // const downloadPDf=()=>{

  // }
  const downloadPDf = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth(); // A4 size 210
      const pdfHeight = pdf.internal.pageSize.getHeight(); // A4 size 295
      const imgWidth = canvas.width;
      const imgHeight = canvas.height; //canvas.height * imgWidth / canvas.width;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("resume.pdf");

      // let heightLeft = imgHeight;
      // let position = 0;

      // pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      // heightLeft -= pageHeight;

      // while (heightLeft >= 0) {
      //   position = heightLeft - imgHeight;
      //   pdf.addPage();
      //   pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      //   heightLeft -= pageHeight;
      // }

      // pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <div className="bg-[#0F172A] w-full">
        <Navbar />
        <div className="text-[#0F172A]" ref={pdfRef}>
          {lastItem && (
            <div className="container my-[50px] w-[80%]  bg-white flex gap-[30px] px-[50px]">
              <div className="w-[25%] flex flex-col h-[100%]  justify-evenly items-center gap-[10px] py-[10px]">
                <div className="w-[200px] h-[200px]  border-2 border-dotted flex flex-col justify-center items-center border">
                  <img
                    src={lastItem.gender === "male" ? Avatar : Avatar1}
                    alt="error"
                    className="w-[150px] h-[150px] flex justify-center items-center"
                  />
                  <div className="text-xl capitalize">
                    {lastItem.first_name} {lastItem.last_name}
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[100%] ">
                    Contact
                  </div>
                  <div className="flex flex-col w-[100%] h-full justify-evenly ">
                    <div className="flex w-full px-[20px] h-[40px] gap-[10px] justify-start items-center">
                      <div className="">
                        <MdContactPhone className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start  text-md ">
                        {lastItem.contact_number}
                      </div>
                    </div>
                    <div className="flex w-full px-[20px] h-[40px] gap-[10px] justify-start items-center">
                      <div className="">
                        <FaLocationDot className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex capitalize justify-start  text-md ">
                        {lastItem.location}
                      </div>
                    </div>
                    <div className="flex w-full px-[20px] h-[40px] gap-[10px] justify-start items-center">
                      <div className=" ">
                        <MdEmail className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex justify-start text-md">
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
                    <div className="flex w-full gap-[10px]  h-[40px] text-lg justify-start px-[20px] items-center">
                      <div className="">
                        <FaLanguage className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex capitalize justify-start w-[50%] ">
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
                    <div className="flex w-full gap-[10px] h-[40px] text-lg justify-start px-[20px] items-center">
                      <div className="">
                        <MdInterests className="w-[30px] h-[25px]" />
                      </div>
                      <div className="flex capitalize justify-start w-[50%] ">
                        {lastItem.hobbies}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[70%] flex pb-[50px] p-[30px] flex-col justify-evenly gap-[20px]  border-3 border-secondary border-start">
                <div className="w-full   flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                    About Me
                  </div>
                  <div className="w-[100%] text-lg font-normal">
                    {lastItem.description}
                  </div>
                </div>
                <div className="w-full  flex flex-col gap-[10px]">
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
                        <span className=" capitalize text-md font-normal px-[10px]">
                          {lastItem.institution}
                        </span>
                      </div>
                      <div className="text-lg capitalize font-bold">
                        Degree:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.degree}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-[10px]">
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
                      <div className="capitalize text-lg font-bold">
                        Company:
                        <span className=" text-md font-normal px-[10px]">
                          {lastItem.company}
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        Position:
                        <span className="capitalize text-md font-normal px-[10px]">
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
                <div className="w-full mt-[10px] flex flex-col gap-[10px]">
                  <div className="font-bold text-xl bg-[#0F172A] text-white text-center py-[5px] w-[20%] ">
                    Skills
                  </div>
                  <div className="relative gap-[10px]">
                  <div className="px-[10px] capitalize absolute flex items-center justify-center border border-info text-lg  font-semibold ">
                    {lastItem.skills}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end container">
          <button className="btn btn-info text-white" onClick={downloadPDf}>
            Download
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
