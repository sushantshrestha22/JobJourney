import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/signup";
import Home from "./component/Home";
import JobPost from "./component/JobPost";
import Resume from "./component/Resume";
import JobSearch from "./component/JobSearch";
function App() {
  return (
    <>
    <JobSearch/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/jobpost" element={<JobPost  />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
