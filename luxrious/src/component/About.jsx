import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className='about-container'>
            <Container className='about-row-container'>
                <Row>
                    <Col>
                        <img src='./assests/catagory/verticle.jpeg' alt='' />
                    </Col>
                    <Col>
                        <h1>HELLO THERE !</h1>
                        <p>I'M A JUNIOUR FULLSTACK WEB DEVLOPER WITH A PASSION FOR BUILDING PROJECT THAT ARE USED ROUINUELY. BUILDING APPLICATION IN MERN BASED JAVASCRIPT AND PHP CURRENTLY I AM TRAINER IN ONETICK INSTITUTE IN FARIDABAD HARIYANA</p>
                        <div className='icon'>
                            <i><AiFillLinkedin /></i>
                            <i><AiFillGithub /></i>
                            <i><AiFillFacebook /></i>
                            <i><AiFillInstagram /></i>
                        </div>
                        <div className='btn'>
                            <Link className='about-btn' to="/product">
                                Get Profile<FaArrowRight />
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Row className='about-websites'>
                    <Col>
                        <h1>About website</h1>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
