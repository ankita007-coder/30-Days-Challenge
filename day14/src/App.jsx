import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Contact, Experience, Home, Intro, Project, Skills } from "./pages";
import { Navigation } from "./components";


const App = () => {
  return <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/introduction" element={<Intro/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/contact-me" element={<Contact/>} />
    </Routes>
  </Router>;
};

export default App;
