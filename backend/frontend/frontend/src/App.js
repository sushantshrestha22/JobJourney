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
import { useState ,useEffect} from "react";

// import { useParams } from 'react-router-dom';
function App() {
  // const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/job/" )
      .then((res) => {setData(res.data);
      console.log(res.data)});
      
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/jobSearch" element={<JobSearch />} />
          <Route path="/jobpost" element={<JobPost  />} />
          <Route path="/jobtracking" element={<JobTracking  />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/create" element={<JobTracking  />} />
          <Route path="/resumeTemplate" element={<ResumeTemplate/>} />
          <Route path="/resource" element={<Resource/>} />

          {
            data.map((item,index)=>{
             return <Route path={`/details/${item.id}`} element={<Detail key={item.id} company_name={item.company_name} job_name={item.job_name} location={item.location} description={item.description} salary={item.salary} experience_level={item.experience_level} skills={item.skills} language={item.language} job_type={item.job_type}/>} />
            })
          }
          
        </Routes>
      </Router>
    </>
  );
}
export default App;
