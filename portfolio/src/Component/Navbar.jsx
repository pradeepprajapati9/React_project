import React from 'react'
import { NavLink } from "react-router-dom";
import "../Globalstyle.css";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
        <div className='menuIcon'>
          <ul className='Navbar-list'>
            <li>
              <NavLink className="Navbar-link" to={"/"}  >Home</NavLink>
            </li>
            <li>
              <NavLink className="Navbar-link" to={"/about"} >About</NavLink>
            </li>
          
            <li>
              <NavLink className="Navbar-link" to={"/resume"}>Resume</NavLink>
            </li>
            <li>
              <NavLink className="Navbar-link" to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink className="Navbar-link" to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}


 
export default Navbar
