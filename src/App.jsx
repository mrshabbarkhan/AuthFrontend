import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Screen/Home";
import Register from "./Screen/Register";
import Login from "./Screen/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PNF from "./Screen/PNF";
import Logout from "./Screen/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PNF />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
