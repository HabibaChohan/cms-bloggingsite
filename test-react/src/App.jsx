import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from './components/header/Navbar';

import Home from "./components/Home";
import Blog from "./components/Blog"
import About from "./components/About";
import Contact from "./components/Contact";
import SingIn from "./components/SingIn"

import Dashboard from './components/AdminPanel/Dashboard';

import AddCategory from './components/AdminPanel/AddCategory';
import ManageCategory from './components/AdminPanel/ManageCategory'

import Addpost from './components/AdminPanel/Addpost';
import Managepost from './components/AdminPanel/Managepost';

import AddUser from './components/AdminPanel/AddUser';
import ManageUser from './components/AdminPanel/ManageUser';

import SinglePost from './components/SinglePost'
import SingUp from './components/SingUp';
import Footer from './components/Footer/Footer';


function App() {
  return (

    <BrowserRouter>
    <Navebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/managecategory" element={<ManageCategory />} />
      <Route path="/addpost" element={<Addpost />} />
      <Route path="/managepost" element={<Managepost />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/manageuser" element={<ManageUser />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/singlepost" element={<SinglePost />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
    <Footer />
   </BrowserRouter>
    
  );
}

export default App;