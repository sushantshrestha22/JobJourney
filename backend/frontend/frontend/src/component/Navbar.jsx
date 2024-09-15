import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { MdOutlineLogout } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  

  const handleSignOut = async () => {
    try {
      // Make an API call to signout endpoint
      const response = await fetch("/signout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Redirect to login page after successful signout
        navigate("/");

         // Disable the back button by clearing history
      window.history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", function(event) {
      window.history.pushState(null, null, window.location.href);
      });

      } else {
        console.error("Failed to sign out");
      }
    } catch (error) {
      console.error("Error during signout", error);
    }
  };
  return (
    <nav className="flex items-center text-white justify-between h-[8vh] sticky top-0 bg-[#0F172A] border-bottom box-border w-full">
      <div className="lg-px-[30px] text-3xl font-bold px-[50px] ">
        <Link to="/home" className="no-underline text-white flex text-3xl items-center">
          JobJourney
        </Link>
      </div>
      <div className="flex gap-[50px] font-semibold px-[50px] ">
        <Link to="/home" className="no-underline text-white flex items-center xl:text-xl">
          Home
        </Link>
        <Link to="/resume" className="no-underline text-white flex items-center xl:text-xl">
          Resume
        </Link>
        <Link to="/jobpost" className="no-underline text-white flex items-center xl:text-xl">
          JobPost
        </Link>
        <Link to="/resource" className="no-underline text-white flex items-center xl:text-xl">
          Resource
        </Link>
        <Link to="/tracking" className="no-underline text-white flex items-center xl:text-xl">
          Jobtracking
        </Link>
        <div className="no-underline text-white flex items-center">
          <button className="btn btn-info text-white flex items-center" onClick={handleSignOut}>Sign Out<MdOutlineLogout className="h-[20px] w-[20px] ms-[5px]" /></button>
        </div>
      </div>
    </nav>
  );
}
