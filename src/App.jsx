import React from 'react';
import './App.css';
import { useState } from 'react';
import img1 from './travel.png';
import { Link, Outlet } from 'react-router-dom';
import { Login } from './Login';




function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  return (
    <div>
    <header>
    <div className='navbar'>
      <div className='logo'>
        <img src={img1} alt='Logo' />
        <h1>TrekZen</h1>
      </div>
      <button className='toggle-button' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`} >
        <li id='list'><Link to='/'>Home</Link></li>
        <li><Link to='/Packages'>Packages</Link></li>
        <li><Link to='/Services'>Services</Link></li>
        <li><Link to='/About'>About us</Link></li>
        <li><button onClick={toggleLoginModal} className='blogin'>Login</button></li>
              </ul>
    </div>
    {isLoginModalOpen && (
          <div className="login-overlay">
            <Login onClose={toggleLoginModal} />
          </div>
        )}
    </header>
    <Outlet/>
    </div>
  );
}

export default App;
