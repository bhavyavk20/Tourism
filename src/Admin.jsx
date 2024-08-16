import React from 'react';
import { Link,Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img1 from './travel.png'
export const Admin = () => {
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
        <li><Link to='Admininterface'>Customer</Link></li>
        <li><Link to='Agencyinterface'>Agency</Link></li>
        <li><Link to='Viewbooking'>View Bookings</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
        </ul>
    </div>
    
    <Outlet/>
    </>
  )
}
