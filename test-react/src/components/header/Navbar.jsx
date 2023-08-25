import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';



const Navebar = () => {
  

   return (
       <nav>
         <div className="container nav-container">
     <h3><NavLink to="/" className="logo">SPORTS</NavLink></h3>

       <ul className="nav-link">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/singin">SingIn</NavLink></li>
        <li>
            <div className="nav-profile">
               <div className="profile-img">
                  <img src="./images/profileimg.jpg" alt="" /></div>
               <ul>
                  <li><a href="./dashboard">Dashboard</a></li>
                  <li><a href="">Log Out</a></li>
               </ul>
            </div>
        </li>
       </ul>


       <button className="phone-button Open"><i className="fa fa-bars"></i></button>
       <button className="phone-button Close"><i className="fa fa-close"></i></button>
       </div>
   </nav>
   )
};


export default Navebar;