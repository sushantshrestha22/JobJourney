import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/signup";
import Home from "./component/Home";
import JobPost from "./component/JobPost";
import Resume from "./component/Resume";
import JobSearch from "./component/JobSearch";
import Resource from "./component/Resource";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/home/jobSearch" element={<JobSearch />} />
          <Route path="/jobpost" element={<JobPost  />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/resource" element={<Resource/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
