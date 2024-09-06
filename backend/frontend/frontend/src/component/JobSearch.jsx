import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoAlert } from "react-icons/go";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const JobSearch = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (search === "" && search1 === "") {
      axios.get("http://127.0.0.1:8000/api/job/").then((res) => {
        const items = res.data;
        setList(items);
      });
    }
  }, [search, search1]);

  const handleClick = (e) => {
    e.preventDefault();
    axios.get("http://127.0.0.1:8000/api/job/").then((res) => {
      const items = res.data;
      const data = items.filter((course) => {
        return (
          course.location.toLowerCase().includes(search.toLowerCase()) &&
          course.job_name.toLowerCase().includes(search1.toLowerCase())
        );
      });
      setList(data);
    });
  };

  return (
    <div className="bg-[#0F172A] flex flex-col items-center justify-center box-border">
      <Navbar />
      <form>
        <div className=" p-4 grid grid-cols-4 gap-4">
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="Enter your job title"
          />
          <input
            type="text"
            id="location"
            name="location"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="enter location"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <input
            type="text"
            id="skill"
            name="skill"
            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
            placeholder="enter skills"
            onChange={(e) => {
              setSearch1(e.target.value);
            }}
            value={search1}
          />
          <button
            //  type="submit"
            className="text-lg rounded bg-blue-200 border-none py-1 px-4 text-[#0F172A] font-semibold"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>

      {list.length === 0 ? (
        <div className="bg-white w-[80%] flex flex-col items-center justify-center gap-3 p-[30px] ">
          <div className=" border-black-300">
            <GoAlert className="w-[200px] h-[200px] text-red-900" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="font-bold text-2xl text-[#0F172A]">
              Whoops, no matches
            </div>
            <div className="font-semibold text-lg text-gray-600">
              we couldn't find any search results.
            </div>
            <div className="font-semibold text-lg text-gray-600">
              Give it another go !!
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[80%] grid grid-cols-2 gap-5 p-[30px]  ">
          {list.map((post, index) => {
            return (
              <div
                key={index}
                className="container flex w-[80%] justify-evenly "
              >
                <div className="bg-white rounded-md border border-2 border-black w-full h-[50vh] p-3 text-white ">
                  <div className="px-[20px] rounded bg-[#0F172A] h-[35vh] flex flex-col justify-center gap-[20px] ">
                    <div className="flex ">
                      <div className="text-lg">{post.company_name}</div>
                    </div>
                    <div className="text-4xl font-bold">{post.job_name}</div>
                    <div className="flex flex-wrap gap-[10px]">
                      <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                        Project Work
                      </button>
                      <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                        {post.experience_level}
                      </button>
                      <button className="border bg-transparent text-white rounded h-[30px] text-sm flex justify-center items-center">
                        {post.job_type}
                      </button>
                      {/* <button className="border bg-transparent text-white rounded h-[30px] text-sm">skills</button> */}
                    </div>
                  </div>
                  <div className="flex pt-4 justify-between items-center ">
                    <div className="text-[#0F172A] px-[20px] font-semibold ">
                      <div className="font-bold italic	">
                        Rs{post.salary}k/monthly
                      </div>
                      <div>{post.location}</div>
                    </div>
                    <Link to={`/details/${post.id}`}>
                      <button className=" text-lg rounded bg-[#0F172A] border-none py-1 px-4 text-white"
                      >
                        Details
                      </button>
                      </Link>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default JobSearch;

// axios.get("http://127.0.0.1:8000/api/job/").then((res) => {
//   setMyData(res.data);
//   console.log(res.data);
// });
