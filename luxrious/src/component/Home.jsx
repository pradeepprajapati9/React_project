import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight, FaTruck, FaCircleDollarToSlot, FaPercent, FaHeadphones } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./Home.css";
import HomeProdcut from './HomeProduct';
import { useState } from 'react';

function Home() {
    const [Hompro, setHomepro] = useState(HomeProdcut);
    return (
        <div className='section-home'>
            <div className='big-container p-5'>
                <Container fluid="md" >
                    <Row className='align-items-center'>
                        <Col>
                            <h1>The Best Note Book Collection 2023</h1>
                            <Link className='btn about-btn' to="/product">Shop Now<FaArrowRight /></Link>
                        </Col>
                        <Col>
                            <img className='banner' src="./assests/product/hero.avif" alt='' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='brnad-container'>
                <Container>
                    <Row className='row-container'>

                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-1.webp" alt='' /></Col>

                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-2.webp" alt='' /></Col>

                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-3.webp" alt='' /></Col>
                    </Row>
                    <Row className='row-container'>
                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-4.webp" alt='' /></Col>
                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-5.webp" alt='' /></Col>
                        <Col className='brand-col'><img className='brand-img' src="./assests/catagory/cart-6.avif" alt='' /></Col>
                    </Row>
                </Container>
            </div>

            <div className='shop-container'>
                <Container>
                    <Row className='row-container-shop'>
                        <Col className='shop-col'>
                            <div className='icon'>
                                <FaTruck />
                            </div>
                            <div className='shop-content'>
                                <h3>free shoping</h3>
                                <p>order</p>
                            </div>
                        </Col>
                        <Col className='shop-col'>
                            <div className='icon'>
                                <FaCircleDollarToSlot />
                            </div>
                            <div className='shop-content'>
                                <h3>return & refund</h3>
                                <p>order</p>
                            </div>
                        </Col>
                        <Col className='shop-col'>
                            <div className='icon'>
                                <FaPercent />
                            </div>
                            <div className='shop-content'>
                                <h3>member discount</h3>
                                <p>order</p>
                            </div>
                        </Col>
                        <Col className='shop-col'>
                            <div className='icon'>
                                <FaHeadphones />
                            </div>
                            <div className='shop-content'>
                                <h3>customer spport</h3>
                                <p>order</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='HomePro'>
                {
                    Hompro.map((curElement) => {
                        return (
                            <>
                                <div className='Homepro-con' key={curElement.Id}>
                                    <div className='product-row'>
                                        <div className='product-card-layout'>
                                            <div className="product-card">
                                                <img src={curElement.Img} alt={curElement.Title} />
                                                <div className='Product-content'>
                                                    <i><BsCartFill /><AiFillEye /><AiFillHeart /></i>
                                                    <h1>{curElement.Cat}</h1>
                                                    <p>{curElement.Price}</p>
                                                    <p>{curElement.Title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>

            <div className='slider-container'>
               
            </div>
        </div>
    );
}

export default Home
