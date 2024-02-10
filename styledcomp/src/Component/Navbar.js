import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Nav>
            <div className='menuIcon'>
                <ul className='Navbar-list'>
                    <li>
                        <NavLink className="Navbar-link" to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="Navbar-link" to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="Navbar-link" to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="Navbar-link" to={"/service"}>Services</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}

const Nav=styled.nav`
.Navbar-list{
    display:flex;
    align-items:center;
    justify-content:space-between;
    list-style:none;
    gap:2rem;
}
 
.Navbar-link{
    text-decoration:none;
    font-size:2rem;
    &:hover,
    &:active{
        color:${({ theme }) => theme.colors.helper};
    }
}

`;

export default Navbar
