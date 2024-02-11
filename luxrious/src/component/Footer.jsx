import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='header-container-footer'>
            <Container fluid className='container-row'>
                <Row fluid>
                    <Col>
                        <h1>luxrious</h1>
                        <span>
                            <i><AiFillFacebook /></i>
                            <i><AiOutlineTwitter /></i>
                            <i><AiFillInstagram /></i>
                            <i><AiFillYoutube /></i>
                        </span>
                    </Col>

                    <Col>
                        <h1>Support</h1>
                        <ul>
                            <li><Link className='link-item' to="/">Acount</Link></li>
                            <li><Link className='link-item' to="/">Order</Link></li>
                            <li><Link className='link-item' to="/">Cart</Link></li>
                            <li><Link className='link-item' to="/">Shipping</Link></li>
                            <li><Link className='link-item' to="/">Return</Link></li>
                        </ul>
                    </Col>

                    <Col>
                        <h1>Pages</h1>
                        <ul>
                            <li><Link className='link-item' to="/">Home</Link></li>
                            <li><Link className='link-item' to="/">About</Link></li>
                            <li><Link className='link-item' to="/">Contact</Link></li>
                            <li><Link className='link-item' to="/">Terms & Condition</Link></li>
                        </ul>
                    </Col>
                </Row>

                <Row className='footer-div'>
                    <Col>
                        <ul>
                            <li><h1>Sign up for our newsletter</h1></li>
                            <li><input type="email" placeholder='Email Address' /></li>
                            <li><Link to="/" className='btn-container' >SUBSCRIBE</Link></li>
                        </ul>
                        <div >
                            <h1>© 2023  Desgin By Pradeep</h1>
                        </div>
                    </Col>


                </Row>
            </Container>

        </div>
    )
}

export default Footer
