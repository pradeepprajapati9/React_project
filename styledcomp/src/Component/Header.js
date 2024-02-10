import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from "styled-components"
const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <img src='./images/logo.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </Mainheader>
  )
}

const Mainheader = styled.header`
 padding:1.4rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content:space-between;
 align-items:center;


 .logo{
    height:3rem;
    border-radius:0.5rem;
 }


`
export default Header
