import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbars = () => {
    return (
        <>
            <div className='big-nav'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">My Real State</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Our Feature</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">On Sale</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Our Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Demo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Our Clients</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <div className='container custom-con'>
                    <div className="card mb-3" >
                        <div className="row g-0 align-items-center">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Find Your <span className='card-title-1'>Dream Home</span> </h5>
                                    <p className="card-text">Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property</p>
                                    <p className="card-text"><small className="text-body-secondary"><input type="email" placeholder='Your Email' className='input-type'/></small><button className='btn-type'>Get started</button></p>
                                </div>
                            </div>  
                            <div className="col-md-4">
                                <img src="../image/main.png" className="img-fluid rounded-start custom-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbars
