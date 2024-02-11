import React from 'react'
import Headers from './Headers'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const GoToContact = () => {
        navigate('/Contact');
    };
    return (

        <div>
            <Headers />
            <div className='container text-center'>
                <h1 className="p-4">About Page</h1>
                <button className=" btn btn-primary" onClick={() => GoToContact()}>Contact</button>
            </div>
        </div>
    )
}

export default About;