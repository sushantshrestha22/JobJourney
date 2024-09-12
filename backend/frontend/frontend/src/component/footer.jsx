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

      <Link to="/home" className="text-white no-underline">Home</Link>
      <Link to="/resume" className="text-white no-underline">Resume</Link>
      <Link to="/jobpost" className="text-white no-underline">JobPost</Link>
      <Link to="/resource" className="text-white no-underline">Resource</Link>
      <Link to="/tracking" className="text-white no-underline">Jobtracking</Link>
      </div>
      <div className="flex gap-5">
      <Link to="https://www.facebook.com/" className="text-white no-underline"><FaFacebook className="h-[30px] w-[30px]"/></Link>
      <Link to="https://www.instagram.com/" className="text-white no-underline"><RiInstagramFill className="h-[30px] w-[30px]"/></Link>
      <Link to="https://www.twitter.com/" className="text-white no-underline"> <FaXTwitter className="h-[30px] w-[30px]" /></Link>
      <Link to="https://www.github.com/" className="text-white no-underline"><FaGithub className="h-[30px] w-[30px]"/></Link>
      <Link to="https://www.youtube.com/" className="text-white no-underline"><IoLogoYoutube className="h-[30px] w-[30px]"/></Link>
      </div>
      <p className="text-sm">© 2024 JobJourney, Inc. All rights reserved.</p>
    </div>
  );
}
