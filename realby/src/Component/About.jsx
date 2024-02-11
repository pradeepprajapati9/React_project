import React from 'react'
import "./About.css";
const About = () => {
    return (
        <>
            <div className='about-container'>
                <div className='container'>
                    <div className="card mb-3"  >
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6">
                                <img src="../image/about.png" className="img-fluid rounded-start about-img" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title title">About Us</h5>
                                    <p className="card-text text">Welcome to my premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.</p>
                                    <p className="card-text text">We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
