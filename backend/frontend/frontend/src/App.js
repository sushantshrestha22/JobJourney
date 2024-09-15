import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Register from "./component/signup";
import Home from "./component/Home";
import JobPost from "./component/JobPost";
import Resume from "./component/Resume";
import JobSearch from "./component/JobSearch";
import Resource from "./component/Resource";
import ResumeTemplate from "./component/ResumeTemplate";
import JobTracking from "./component/JobTracking";
import Update from "./component/Update";
import Detail from "./component/Detail";
import axios from "axios";
import { useState, useEffect } from "react";
import Create from "./component/Create";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/job/")
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      });

  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tracking/")
      .then((res) => {
        setUpdate(res.data);
        console.log(res.data)
      });

  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobSearch" element={<JobSearch />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/tracking" element={<JobTracking />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/update" element={<Update />} /> */}
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/resumeTemplate" element={<ResumeTemplate />} />
          <Route path="/resource" element={<Resource />} />

          {
            data.map((item, index) => {
              return <Route path={`/details/${item.id}`} element={<Detail key={item.id} company_name={item.company_name} job_name={item.job_name} location={item.location} description={item.description} salary={item.salary} experience_level={item.experience_level} skills={item.skills} language={item.language} job_type={item.job_type} requirement={item.requirement} email={item.email} phone={item.phone} id={item.id} />} />
            })
          }
          {
            update.map((item, index) => {
              return <Route path={`/update/${item.id}`} element={<Update key={item.id} Title={item.title} Company={item.company} Status={item.status} Contact={item.contact} Date={item.date} Note={item.note} Id={item.id} />} />
            })
          }

        </Routes>
      </Router>
    </>
  );
}
export default App;
