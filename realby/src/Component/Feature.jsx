import React from 'react'
import { Link } from "react-router-dom";
import "./Feature.css"
const Feature = () => {
    return (
        <>
            <div className='feature-con mt-5 p-4 container-feature'>
                <div className='feature text-center p-5 '>
                    <h1>Feature <span>Properties</span></h1>
                    <p>Here are some of our featured properties:</p>
                </div>
              <div className='container feature-container'>
              <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    <div className="col">
                        <div className="card h-100 card-feature">
                            <img src="../image/card-1.png" class="card-img-top card-grou-img" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title f-title ">123 Main St</h5>
                                <p className="card-text">3 bd | 2 ba | 1,500 sqft</p>
                                <p className="card-text">$500,000</p>
                                <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-feature">
                            <img src="../image/card-2.png" className="card-img-top card-grou-img" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title f-title ">123 Main St</h5>
                                <p className="card-text">3 bd | 2 ba | 1,500 sqft</p>
                                <p className="card-text">$500,000</p>
                                <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-feature">
                            <img src="../image/card-3.png" className="card-img-top card-grou-img" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title f-title ">123 Main St</h5>
                                <p className="card-text">3 bd | 2 ba | 1,500 sqft</p>
                                <p className="card-text">$500,000</p>
                                <p className="card-text"><Link to="" className='link-link'>View Details</Link></p>
                            </div>
                        </div>
                    </div>
                </div>  
              </div>
            </div>
        </>
    )
}

export default Feature


