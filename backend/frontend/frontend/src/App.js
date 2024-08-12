import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/signup";
import Home from "./component/Home";
import JobPost from "./component/JobPost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
          <Route path="/home" element={<Home/>} />
          <Route path="/jobpost" element={<JobPost  />} />
=======
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
>>>>>>> origin/main
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
