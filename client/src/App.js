import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/*" Component={Errorpage}/>
      </Routes>
    </>
  );
}

export default App;
