import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
  // navbar color change
  const [navbarColor , setNavbarColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 100)
    {
      setNavbarColor(true);
    }
    else
    {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll" , changeNavbarColor);
  // responsive navbar
  const [showNavbar , setshowNavbar] = useState(false);
  const changeNavbar = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <div>

      {/* desktop view navbar */}
      <div className={`${navbarColor ? 'bg-white' : 'bg-transparent'} nav-container flex justify-between p-4 w-full fixed top-0 z-20`}>
        <a href="/"><img src={require("../assets/image/CIP-logo.webp")} alt="pic" width={110} height={100} className="logo rounded"/></a>
          <div className="links flex justify-end text-xl text-white items-center gap-x-14 pr-6 font-bold">
            <Link to="about" smooth={true} duration={50} offset={-50} spy={true} className="text-orange-500 cursor-pointer">About</Link>
            <Link to="run1" smooth={true} duration={50} offset={-200}  spy={true} className="text-orange-500 cursor-pointer">Courses</Link>
            <Link to="schedule" smooth={true} duration={50} offset={-50}   spy={true} className="text-orange-500 cursor-pointer">Schedule</Link>
            <Link to="testimonial" smooth={true} duration={50} offset={-50} spy={true}  className="text-orange-500 cursor-pointer">Testimonials</Link>
            <Link to="upcoming" smooth={true} duration={50} offset={-80} spy={true}  className="text-orange-500 cursor-pointer">Upcoming</Link>
            <Link to="contact" smooth={true} duration={50} offset={-80}  spy={true} className="text-orange-500 cursor-pointer">Contact</Link>
          </div>
          <GiHamburgerMenu className="hamburger-menu" onClick={changeNavbar}/>
      </div>

      {/* mobile view navbar , default display - none */}
      <div className={`${showNavbar ? "mobile-view text-2xl fixed top-0" : "hidden"} flex flex-col w-full bg-white z-10 items-center justify-center gap-y-4`}>
          <Link to="about" smooth={true} duration={50} offset={-80} spy={true} className="text-orange-500 cursor-pointer">About</Link>
          <Link to="run1" smooth={true} duration={50} offset={-330}  spy={true} className="text-orange-500 cursor-pointer">Run 1</Link>
          <Link to="schedule" smooth={true} duration={50} offset={-50}   spy={true} className="text-orange-500 cursor-pointer">Schedule</Link>
          <Link to="testimonial" smooth={true} duration={50} offset={-50} spy={true}  className="text-orange-500 cursor-pointer">Testimonials</Link>
          <Link to="upcoming" smooth={true} duration={50} offset={-80} spy={true}  className="text-orange-500 cursor-pointer">Upcoming</Link>
          <Link to="contact" smooth={true} duration={50} offset={-80}  spy={true} className="text-orange-500 cursor-pointer">Contact</Link>
      </div>
    </div>
  )
}
