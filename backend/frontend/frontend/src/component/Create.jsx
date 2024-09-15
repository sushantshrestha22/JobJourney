import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const [errors, setErrors] = useState({});

  // Validation functions for each field
  const validateTitle = () => {
    if (title.trim() === "") {
      return "Job title is required";
    } 
    return ""
  };

  const validateCompany = () => {
    if (company.trim() === "") {
      return "Company name is required";
    } 
    return ""
  };

  const validateStatus = () => {
    if (status.trim() === "") {
      return "Status is required";
    } 
    return ""
  };

  const validateDate = () => {
    if (date.trim() === "") {
      return "Date is required";
    }
    return ""
  };

  const validatePhone = () => {
    const phonePattern = /^(97|98)\d{8}$/;
    if (!contact) {
      return "Phone number is required.";
    } else if (!phonePattern.test(contact)) {
      return "Please enter a valid 10-digit Nepali phone number.";
    }
    return "";
  };

  const validateNote = () => {
    if (note.trim() === "") {
      return "Note is required";
    } 
    return ""
  };

  const validateForm = () => {
    const newErrors = {
      title: validateTitle(),
      status: validateStatus(),
      company: validateCompany(),
      date: validateDate(),
      contact: validatePhone(),
      note: validateNote(),
    };
    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  function handelClick(event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Successfully submitted and is under review.");
      event.target.form.submit();
    }
  }
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
              {errors.title && (
                <span className="text-red-500">{errors.title}</span>
              )}
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
              {errors.company && (
                <span className="text-red-500">{errors.company}</span>
              )}
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
              {errors.status && (
                <span className="text-red-500">{errors.status}</span>
              )}
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
              {errors.date && (
                <span className="text-red-500">{errors.date}</span>
              )}
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
              {errors.contact && (
                <span className="text-red-500">{errors.contact}</span>
              )}
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
              {errors.note && (
                <span className="text-red-500">{errors.note}</span>
              )}
            </div>
          </div>
          <div className="container flex justify-end gap-[20px]">
            <Link to="/tracking">
              <button className="btn btn-primary">Back</button>
            </Link>
            <button type="submit" onClick={handelClick} className="btn btn-success">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
