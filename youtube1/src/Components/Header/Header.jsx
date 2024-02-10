import React from "react";
import "./Header.css";
import Logo1 from "../../assets/logo1.jpg";
const Header = () => {
 
  return (
    <section>
      <div className="header-h flexCenter">
        <div className="left-h">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
          <img src={Logo1} alt="logo" />
        </div>
        <div className="center-h">
          <div>
            <input className="input" type="search" placeholder="search" />
            <div className="search">
              <i className="fa-solid fa-search"></i>
            </div>
          </div>
        </div>
        <div className="right-h">
          <span>
            <i className="fa-solid fa-video"></i>
          </span>
          <span>
            <i className="fa-regular fa-bell"></i>
          </span>
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
