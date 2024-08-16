import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

export const Signup = ({ onClose }) => {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    dob: '',
    email: '',
    pass: '',
    cpass: '',
    profession: 'select one',
    agencyname: '' // New field for agency name
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (
  //     data.fname &&
  //     data.lname &&
  //     data.dob &&
  //     data.pass &&
  //     data.cpass &&
  //     data.profession !== 'select one'
  //   ) {
  //     if (data.pass === data.cpass) {
  //       try {
  //         const response = await axios.post('http://localhost:4003/register', data);
  //         console.log(response);
  //         toast.success('Successfully registered');
  //         onClose(); // Assuming onClose is a function passed from parent to close the signup modal
  //       } catch (error) {
  //         console.error('Error registering user:', error);
  //         toast.error('An error occurred while registering. Please try again later.');
  //       }
  //     } else {
  //       toast.error('Password and confirm password must be the same');
  //     }
  //   } else {
  //     toast.error('Please fill all the fields');
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (
      data.fname &&
      data.lname &&
      data.dob &&
      data.email &&
      data.pass &&
      data.cpass &&
      data.profession !== 'select one'
    ) {
      if (data.pass === data.cpass) {
        if (!passwordRegex.test(data.pass)) {
          toast.error('Password must contain at least 8 characters, including lowercase letters, uppercase letters, numbers, and special symbols.');
          return;
        }
        
        try {
          const response = await axios.post('http://localhost:4003/register', data);
          console.log(response);
          toast.success('Successfully registered');
          onClose(); // Assuming onClose is a function passed from parent to close the signup modal
        } catch (error) {
          console.error('Error registering user:', error);
          toast.error('An error occurred while registering. Please try again later.');
        }
      } else {
        toast.error('Password and confirm password must be the same');
      }
    } else {
      toast.error('Please fill all the fields');
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="popups">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h2 className="signup">SIGN UP</h2>
            <input
              type="text"
              onChange={handleChange}
              name="fname"
              value={data.fname}
              placeholder="First name"
              required
            />
            <input
              type="text"
              onChange={handleChange}
              name="lname"
              value={data.lname}
              placeholder="Last name"
              required
            />
            <input
              type="date"
              onChange={handleChange}
              name="dob"
              value={data.dob}
              placeholder="Date"
              required
            />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={data.email}
              placeholder="Email"
              required
            />
            <input
              type="password"
              onChange={handleChange}
              name="pass"
              value={data.pass}
              placeholder="Password"
              required
            />
            <input
              type="password"
              onChange={handleChange}
              name="cpass"
              value={data.cpass}
              placeholder="Confirm password"
              required
            />
            <select
              name="profession"
              className="form-control mt-3 mb-3"
              value={data.profession}
              onChange={handleChange}
            >
              <option value="select one">Select one</option>
              <option value="user">Customer</option>
              <option value="agency">Agency</option>
            </select>
            {data.profession === 'agency' && ( // Render input field for agency name if profession is 'agency'
              <input
                type="text"
                onChange={handleChange}
                name="agencyname"
                value={data.agencyname}
                placeholder="Agency Name"
                required
              />
            )}
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
