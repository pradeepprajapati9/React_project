import React from 'react'
import { Link } from 'react-router-dom'
import "./OurClients.css";
const OurClients = () => {
    return (
        <>
            <div className='our-clients'>
                <div className='text-center'>
                    <h1>Our <span>Clients</span></h1>
                    <p>See what our clients have to say about us.   </p>
                </div>
                <div className='container clients-container'>
                    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        <div className="col">
                            <div className="card h-100 card-clients">
                                <img src="../image/card-1.png" class="card-img-top card-grou-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title f-title ">123 Main St</h5>
                                    <p className="card-text">"Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily."</p>
                                    <p className='card-text text-muted'>Adam Johnson, Homebuyer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-clients">
                                <img src="../image/card-2.png" className="card-img-top card-grou-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title f-title ">123 Main St</h5>
                                    <p className="card-text">"Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily."</p>
                                    <p className='card-text text-muted'>Adam Johnson, Homebuyer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-clients">
                                <img src="../image/card-3.png" className="card-img-top card-grou-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title f-title ">123 Main St</h5>
                                    <p className="card-text">"Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily."</p>
                                    <p className='card-text text-muted'>Adam Johnson, Homebuyer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurClients
