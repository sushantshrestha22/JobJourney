import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JobTracking() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const [data, setData] = useState([]);

  const hello = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post("https://66d8318437b1cadd8053c183.mockapi.io/api/v1/crud", {
      title: title,
      company: company,
      status: status,
      contact: contact,
      date: date,
      note: note,
    });
  };
  const handleEdit = () => {
    hello("/update");
  };

  const handleDelete = (message) => {
    axios
      .delete(
        `https://66d8318437b1cadd8053c183.mockapi.io/api/v1/crud/${message}`
      ).then((res)=>{
        setData(res.data);
      });
      
  };

  useEffect(() => {
    axios
      .get("https://66d8318437b1cadd8053c183.mockapi.io/api/v1/crud")
      .then((res) => {
        setData(res.data);
      });
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="bg-[#0F172A] py-[20px]">
        <div className="container  text-xl font-bold text-white ">
          Application:
        </div>
        <form
          // method="POST"
          // action="https://66d8318437b1cadd8053c183.mockapi.io/api/v1/crud"
          className="border bg-white border-2 mt-[20px] py-[20px] container"
        >
          <div className="grid grid-cols-4 container gap-[20px]">
            <div className="mb-3 flex flex-col">
              <label htmlFor="title" className="form-label">
                Job title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter job title"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="company" className="form-label">
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="enter company name"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="status" className="form-label">
                Status:
              </label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="enter your status"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="date" className="form-label">
                Date Applied:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="contact" className="form-label">
                Contact Info:
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                placeholder="enter your contact details"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                value={contact}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="note" className="form-label">
                Note:
              </label>
              <input
                type="text"
                id="note"
                name="note"
                placeholder="enter note"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                value={note}
                required
              />
            </div>
          </div>
          <div className="container flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <div className="bg-[#0F172A] py-[20px]">
        <div className="container  text-xl font-bold text-white ">
          Job Tracking Sheet:
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
            <tbody>
              {data.map((items, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{items.id}</th>
                    <td>{items.title}</td>
                    <td>{items.company}</td>
                    <td>{items.status}</td>
                    <td>{items.date}</td>
                    <td>{items.contact}</td>
                    <td>{items.note}</td>
                    <td>
                      <FaEdit
                        className="h-[30px] w-[30px]"
                        onClick={handleEdit}
                      />
                      <MdDelete
                        className="h-[30px] w-[30px] text-red-600"
                        onClick={() => handleDelete(index)}
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
