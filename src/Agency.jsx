import React from 'react';
import { Link,Outlet, useNavigate } from 'react-router-dom';
import './Agency.css'; // Import CSS file for styling
import { useState } from 'react';
import img1 from './travel.png'

export const Agency = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()

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
        <li><Link to='Agencyhome'>Home</Link></li>
        <li><Link to='Createpackages'>Create Packages</Link></li>
        <li><Link to='Explore'>Explore</Link></li>
        <li><Link to='Viewbooking'>Bookings</Link></li>
        <li><Link to='Profiles'>Profile</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
        </ul>
    </div>
    
    <Outlet/>
    </>
  );
};
