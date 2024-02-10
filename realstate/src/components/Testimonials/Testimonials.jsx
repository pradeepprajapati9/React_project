import React from 'react';
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../assets/image/icons/doubt.png';
import './Testimonials.css';
const Testimonials = () => {
  
    const testiMonials = [
        {
            name: 'Madhav Dhir',
            description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            address: 'Pinegrove School, June 2023 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Vidushi',
            description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            address: 'Pinegrove School, June 2023 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Rachit Bansal',
            description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
            address: 'Pinegrove School, June 2023 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Diya Chopra',
            description: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            address: 'Pinegrove School, June 2023 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial " className="testimonials mt-14 bg-gray-100 py-8">
            <div className="mt-5">
                <h4 className="text-2xl font-bold text-center">TESTIMONIALS</h4>
                <h3 className="text-lg italic text-center">What Our Students Said?</h3> 
                <div className="carousel  ">
                    <div className="">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item  ">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={userPic} alt = "carousel-pic"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestimonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />
                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;