import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
             <Link to="/">Home</Link>
             <Link to="/reviw">Order Review</Link>
             <Link to="/about">About</Link>
             <Link to='/grandpa'>GrandPa</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/login">Login</Link>
            <Link to="/logOut">LogOut</Link>
         
        </div>
    );
};

export default Header;