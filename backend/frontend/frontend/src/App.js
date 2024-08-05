import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
