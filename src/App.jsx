import React from 'react';
import './App.css';
import { useState } from 'react';
import img1 from './travel.png';
import { Link, Outlet } from 'react-router-dom';



function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header>
    <div className='navbar'>
      <div className='logo'>
        <img src={img1} alt='Logo' />
        <h1>Travel</h1>
      </div>
      <button className='toggle-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`} >
        <li id='list'><Link to='/'>Home</Link></li>
        <li><Link to='/Booking'>Booking</Link></li>
        <li><Link to='/Packages'>Packages</Link></li>
        <li>Services</li>
        <li>About us</li>
        <li>Login</li>
      </ul>
    </div>
    </header>
    <Outlet/>
    </div>
  );
}

export default App;
