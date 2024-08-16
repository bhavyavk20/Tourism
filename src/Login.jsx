import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from './Signup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Login = ({ onClose }) => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const navigate = useNavigate();


  const [data2, setData2] = useState('');

  const handleChange = (event) => {
    setData2({ ...data2, [event.target.name]: event.target.value });
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
  };

  const handleSignupClick = () => {
    toggleSignupModal();
    navigate('/signup'); // Navigate to the signup page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData2(data2);
    if (data2.email === 'admin@gmail.com' && data2.pass === 'admin') {
      navigate('/Admin')
    }
    else {
      try {
        let response = await axios.post('http://localhost:4003/login', data2)
        console.log(response.data);
        const token = response.data.token;
        console.log(token);
        localStorage.setItem('token', token)
        localStorage.setItem('id', response.data.user._id)
        if (response.data) {
          if (response.data.user.profession === 'user') {
            if(response.data.user.verified)
            {
            //  toast.success('Successfully Login');
            navigate('/user')
            }
            else
            {
              toast.error('need admin verification for login')
            }
          }
          if (response.data.user.profession === 'agency') {
            if (response.data.user.verified) {
              navigate('/agency')
            }
            else {
              toast.error('need admin verification for login')
            }
          }
        }

      }
      catch (e) {
        toast.error('invalid username or password')
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit} className={`popup ${isSignupModalOpen ? 'hidden' : ''}`}>
            <span className="close" onClick={onClose}>&times;</span>
            <h2 className="login">LOGIN</h2>
            <input type="email" onChange={handleChange} name="email" value={data2.email ? data2.email : ''} placeholder="Email" required />
            <input type="password" onChange={handleChange} name="pass" value={data2.pass ? data2.pass : ''} placeholder="Password" required />
            <input type="submit" value="Login" />
            <p>
              Don't have an account?
              <Link onClick={handleSignupClick}>Sign Up</Link>
            </p>
          </form>
          {isSignupModalOpen && (
            <div className="login-overlay">
              <Signup onClose={toggleSignupModal} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
