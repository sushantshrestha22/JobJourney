import React, { useState} from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  
  return (
    <div>
      <Navbar />
      <div className="bg-[#0F172A] py-[20px] h-[90vh] flex flex-col items-center justify-center ">
        <div className="text-xl font-bold text-white w-[50%]">Application:</div>
        <form
          method="POST"
          action="http://127.0.0.1:8000/create/"
          className="border bg-white border-2 mt-[20px] py-[20px]  w-[50%]"
        >
          <div className="grid grid-cols-2 container gap-[20px]">
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
          <div className="container flex justify-end gap-[20px]">
            <Link to="/tracking">
              <button className="btn btn-primary">Back</button>
            </Link>
            <button
              type="submit"
              className="btn btn-success"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
