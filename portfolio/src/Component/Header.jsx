import React from 'react'
import Navbar from './Navbar'
import "./Header.css";
import About from '../About';
import Resume from '../Resume';
import Service from '../Service';
import Contact from '../Contact';
function Header() {
  return (
    <div >
      <div className='big-continaer'>
        <div className='container-img'>
          <Navbar />
          <div className="Navbar-content">
            <h1>Pradeep</h1>
            <p>I'M A  FULLSTACK DEVELOPER IN INDIA</p>
          <p>currently i am working on this websites</p>
            <h1><i class="fa-solid fa-angle-down"></i></h1>
          </div>
        </div>
      </div>
      <About />
      <Resume />
      <Service />
      <Contact />

    </div>
  )
}

export default Header
