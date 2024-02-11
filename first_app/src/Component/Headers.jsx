import React from 'react'
import { Link } from 'react-router-dom';

const Headers = () => {
return (
        <div>
            <div className="container-fluid bg-dark text-white">
                <div className="container-fluid bg-dark text-white">
                    <div className='container d-flex p-3 justify-content-around'>
                        <ul className='nav text-transform-uppercase'>
                            <li className='navbar-brand '><Link className='nav-link text-white' Link to="/">ProjectClub</Link></li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white' Link to="/">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white' Link to="/about">about</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white' Link to="/Contact">Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link text-white' Link to="/Login"> Login</Link>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <input className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
                            <button className='btn btn-outline-success' type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Headers
