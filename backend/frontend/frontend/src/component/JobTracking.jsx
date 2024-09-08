import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function JobTracking() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/update/" + id);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tracking/").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/tracking/${id}`)
      .then(navigate("/tracking"));
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#0F172A] py-[20px]">
        <div className="container flex justify-between  text-xl font-bold text-white ">
          <div>Job Tracking Sheet:</div>
          <Link to="/create">
            <button className="btn btn-success">create</button>
          </Link>
        </div>
        <div className="border bg-white border-2 mt-[20px] py-[20px] container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Job title</th>
                <th scope="col">Company</th>
                <th scope="col">Status</th>
                <th scope="col">Date Applied</th>
                <th scope="col">Contact Info</th>
                <th scope="col">Note</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="w-[100%]">
              {data.map((items, index) => {
                return (
                  <tr key={index} className="w-[100%]">
                    <th scope="row">{items.id}</th>
                    <td>{items.title}</td>
                    <td>{items.company}</td>
                    <td>{items.status}</td>
                    <td>{items.date}</td>
                    <td>{items.contact}</td>
                    <td className="w-[30%]">{items.note}</td>
                    <td>
                      <Link to={`/update/${items.id}`}>
                        <button>
                          <FaEdit className="h-[30px] w-[30px]" />
                        </button>
                      </Link>

                      <MdDelete
                        className="h-[30px] w-[30px] text-red-600"
                        onClick={() => handleDelete(items.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
