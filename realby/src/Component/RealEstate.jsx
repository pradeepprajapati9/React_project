import React from 'react'
import { Link } from 'react-router-dom'
import "./RealEstate.css";
import ReactPlayer from "react-player";

const RealEstate = () => {
    return (
        <>
            <div className='Real-state p-5'>
                <div className='container'>
                    <div className="card mb-3"  >
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6">
                             <h4 className='text-center'>Real Estate Video</h4>
                             <img src="../image/card-1.png" class="card-img-top card-grou-img" alt="..." /> 
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title f-title">Why Choose Our Properties?</h5>
                                    <h5 className="card-title f-title">My Real Estate</h5>
                                    <p className="card-text text">Spacious and comfortable living spaces</p>
                                    <p className="card-text text">Spacious and comfortable living spaces</p>
                                    <p className="card-text text">Spacious and comfortable living spaces</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RealEstate
