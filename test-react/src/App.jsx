import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from './components/header/Navbar';

import Home from "./components/Home";
import Blog from "./components/Blog"
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SingIn from "./components/SingIn"

import Dashboard from './components/AdminPanel/Dashboard';

import Footer from './components/Footer/Footer';




function App() {
  return (

    <BrowserRouter>
    <Navebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    <Footer />
   </BrowserRouter>
    
  );
}

export default App;