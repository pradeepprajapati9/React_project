import React from 'react'
import "./OurContact.css";
const OurContact = () => {
    return (
        <>
            <div className='our-contact'>
                <div className='container'>
                    <div className="card mb-3"  >
                        <div className="row g-0 p-4  ">
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title f-title">Contact Us</h5>
                                    <p className="card-text text">If you have any questions or would like to schedule a consultation with one of our real estate experts, please don't hesitate to contact us</p>
                                    <p className="card-text text">1234 Main St, Anytown USA 12345</p>
                                    <p className="card-text text">+919953183126</p>
                                    <p className="card-text text">prajapatipradeepkumar954@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form >
                                    <div class="mb-3 row">
                                        <label for="Name" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Enter Your Name" />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="Email" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" placeholder="Enter Your Email" />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" placeholder="Type Your Number" />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Message</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" placeholder="Type Your Message" />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="address" class="col-sm-2 col-form-label">address</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" placeholder='Type your Address ' />
                                        </div>
                                    </div>
                                    <div class="mb-3 row-1 text-center">
                                        <input type="submit"  class="btn btn-outline-primary d-inline"/> 
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurContact
