import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import "./Product.css";
import { BsCartFill } from "react-icons/bs";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import Allproduct from './Cartproduct';

function Product() {
    const [product, setproduct] = useState(Allproduct)
    const filterPro = (product) => {
        const update = Allproduct.filter((x) => {
            return x.Cat === product;
        })
        setproduct(update)
    }

    const All_Product = () => {
        setproduct(Allproduct)
    }
    return (
        <div>
            <Container fluid className='Product-container-all'>
                <h1># Here Is Product All Categories</h1>
                <Row className='row-product'>
                    <Col>
                        <ul>
                            <h1>CATEGORIES</h1>
                            <li className='link-pro' onClick={() => All_Product()}>All Product</li>
                            <li className='link-pro' onClick={() => filterPro("Headset")}>Headset</li>
                            <li className='link-pro' onClick={() => filterPro("Laptop")}>laptop</li>
                            <li className='link-pro' onClick={() => filterPro("Shirt")}>Shirt</li>
                            <li className='link-pro' onClick={() => filterPro("Paint")}>Jeans</li>
                            <li className='link-pro' onClick={() => filterPro("Mobile")}>Mobile</li>
                            <li className='link-pro' onClick={() => filterPro("Earphone")}>Earphone</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='HomePro'>
                            {
                                product.map((curElement) => {
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
