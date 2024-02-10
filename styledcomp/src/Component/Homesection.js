import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import { Button } from "../Style/Button"
import { useGlobaleContext } from "../Context";


const Homesection = () => {
    const { name, images } = useGlobaleContext();

    return <Wrapper>
        <div className='container grid grid-tow-column'>
            <div className='section-hero-data'>
                <p className='hero-top-data'>This  Is me </p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>
                    I'am {name} A Fullstack Developer With A trainer and Also Fast Learner
                    And doing Hard work always try to  Handle any situation with a problem..
                </p>
                <Button className='btn hireme-btn'>
                    <NavLink to="/contact">hire me</NavLink>
                </Button>
            </div>

            {/* for images */}
            <div className='section-hero-img'>
                <img src={images} alt='' />
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
 

.section-hero-data{
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:2rem;
    gap:1.5rem;
}
 

.section-hero-img img{
    width:auto;
    max-height:400px;    
    border-radius:3rem;
    box-shadow:0 2rem 4rem rgba(0,0,0,.4);
}

`;

export default Homesection
