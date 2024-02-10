import React from 'react';

const TestimonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description} = testiMonialDetail;
    return (
        <div className='item'>
            <div className='shadow-effect'>
                {/* <img className="carousel-pic" src={img} alt = "testimonial-pic"/> */}
                <p>{description}</p>
            </div>
            <div className="testimonial-name bg-orange-200">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default TestimonialsDetails;