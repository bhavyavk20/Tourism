import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import img1 from './travel.png'
import { useState } from 'react';

export const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };



      const handleClick = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.href = '/'; 
    };

  return (
    <>
     <div className='navbar'>
      <div className='logo'>
        <img src={img1} alt='Logo' />
      </div>
      <button className='toggle-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`} >
        <li><Link to='Userpackages'>Packages</Link></li>
        {/* <li><Link to='#'>Review</Link></li> */}
        {/* <li><Link to='Booking'>Book now</Link></li> */}
        <li><Link to='Profile'>Profile</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
        </ul>
    </div>
    <Outlet/>
    </>
  )
}
