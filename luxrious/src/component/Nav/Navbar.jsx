import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart, FaCartArrowDown } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbars() {
    return (
        <>
            <div className='header'>
                <Navbar expand="lg" className="bg-body-tertiary"  >
                    <Container fluid >
                        <Navbar.Brand href="#">Luxrious</Navbar.Brand>
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search Product"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Navbar.Collapse>
                        <Link className='link-icon' href="#action1">Hello User <i><FaHeart /> </i></Link>
                        <Link className='link-icon' href="#action2">Cart  <i><FaCartArrowDown /></i> </Link>
                    </Container>
                </Navbar>
            </div>

            <div className='header-sec'>
                <Navbar expand="lg" className="body-tertiary">
                    <Container fluid >
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 d-flex"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Link className='link-item' to="/">Home</Link>
                                <Link className='link-item' to="/product">Product</Link>
                                <Link className='link-item' to="/about">About</Link>
                                <Link className='link-item' to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Navbars;