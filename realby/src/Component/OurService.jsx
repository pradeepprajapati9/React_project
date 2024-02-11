import React from 'react'
import { Link } from 'react-router-dom'
import "./Ourservice.css";
const OurService = () => {
    return (
        <>
            <div className='our-service'>
                <div className='feature-con mt-5 p-4  '>
                    <div className='feature text-center p-5 '>
                        <h1>Our   <span>Service</span></h1>
                        <p>We offer many services for our clients, Here are some of our services:</p>
                    </div>
                    <div className='container -container'>
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                            <div className="col">
                                <div className="card h-100 card-service">
                                    <img src="../image/card-1.png" class="card-img-top card-grou-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title f-title ">Home Buying</h5>
                                        <p className="card-text">We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem</p>
                                        <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 card-service">
                                    <img src="../image/card-2.png" className="card-img-top card-grou-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title f-title ">Home Selling</h5>
                                        <p className="card-text">We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem</p>
                                        <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 card-service">
                                    <img src="../image/card-3.png" className="card-img-top card-grou-img" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title f-title ">Property Management</h5>
                                        <p className="card-text">We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem</p>
                                        <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService
