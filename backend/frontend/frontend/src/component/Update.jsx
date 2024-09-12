import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Update({
  Id,
  Title,
  Company,
  Status,
  Contact,
  Date,
  Note,
}) {
  const [title, setTitle] = useState(Title);
  const [company, setCompany] = useState(Company);
  const [status, setStatus] = useState(Status);
  const [contact, setContact] = useState(Contact);
  const [date, setDate] = useState(Date);
  const [note, setNote] = useState(Note);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/edit/${Id}`, {
        title: title,
        company: company,
        status: status,
        contact: contact,
        date: date,
        note: note,
      })
      .then((response) => {
        console.log("Update successful:", response.data);
        navigate("/tracking");
      })
      .catch(
        setError("error")
      )
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#0F172A] py-[20px] h-[90vh] flex flex-col justify-center items-center">
        <div className="text-xl font-bold text-white w-[50%]">Update:</div>
        <div className="w-[100%] flex justify-center mt-[20px] items-center">
          <form
            onSubmit={handleSubmit}
            className="border bg-white border-2 py-[20px] w-[50%]"
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
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2 rounded outline-none"
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
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2 rounded outline-none"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  required
                />
              </div>
              
              
              <div className="mb-3 flex flex-col ">
              <label htmlFor="status" className="form-label">
                Status:
              </label>
              <select
                name="status"
                id="status"
                className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2  rounded outline-none"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <option value="part-time">Applied</option>
                <option value="interview schedule">Interview Schedule</option>
                <option value="pending">Pending</option>
                <option value="withdrawn">Withdrawn</option>
                <option value="completed">Completed</option>
              </select>
            </div>
              <div className="mb-3 flex flex-col">
                <label htmlFor="date" className="form-label">
                  Date Applied:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2 rounded outline-none"
                  onChange={(e) => setDate(e.target.value)}
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
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2 rounded outline-none"
                  onChange={(e) => setContact(e.target.value)}
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
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-1 px-2 rounded outline-none"
                  onChange={(e) => setNote(e.target.value)}
                  value={note}
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="container flex justify-end gap-[20px]">
              <Link to="/tracking">
                <button type="button" className="btn btn-primary">Back</button>
              </Link>
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
