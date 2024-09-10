import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-[#0F172A] text-white box-border flex flex-col items-center justify-center gap-5 text-xl h-[50vh]">
      <div className="flex gap-5">

      <Link to="/home" className="text-white">Home</Link>
      <Link to="/resume" className="text-white">Resume</Link>
      <Link to="/jobpost" className="text-white">JobPost</Link>
      <Link to="/resource" className="text-white">Resource</Link>
      <Link to="/tracking" className="text-white">Jobtracking</Link>
      </div>
      <div className="flex gap-5">
        <FaFacebook className="h-[30px] w-[30px]"/>
        <RiInstagramFill className="h-[30px] w-[30px]"/>
        <FaXTwitter className="h-[30px] w-[30px]" />
        <FaGithub className="h-[30px] w-[30px]"/>
        <IoLogoYoutube className="h-[30px] w-[30px]"/>
      </div>
      <p className="text-sm">© 2024 JobJourney, Inc. All rights reserved.</p>
    </div>
  );
}
