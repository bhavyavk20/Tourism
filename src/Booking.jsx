import React, { useState } from 'react';
import img4 from './n1.jpg';
import './Booking.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


export const Booking = ({onClose}) => {
  const [data, setData] = useState('');
  const navigate = useNavigate();



  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userid = localStorage.getItem('id');
    if (
      data.name &&
      data.email &&
      data.destination &&
      data.fdate &&
      data.tdate &&
      data.guest &&
      data.accommodationtype 
      
    ) {
      console.log(data);
      let response = await axios.post('http://localhost:4003/insertbooking', {
        ...data,
        user: userid,
      });
      console.log(response);
      toast.success('Success');
    
    } else {
      toast.error('Invalid');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='modal'>
       <div className='modal-content'>
       <form className='pop'>
       <span className="close" onClick={onClose}>&times;</span>
      <h1>Booking</h1>
            <input
              type='text'
              name='name'
              value={data.name ? data.name : ''}
              placeholder='Enter your name'
              onChange={handleChange}
            />
            <input
              type='text'
              name='email'
              value={data.email ? data.email : ''}
              placeholder='abcd@gmail.com'
              onChange={handleChange}
            />
            <input
              type='text'
              name='destination'
              value={data.destination ? data.destination : ''}
              placeholder='Where to'
              onChange={handleChange}
            />
            <input
              type='date'
              name='fdate'
              value={data.fdate ? data.fdate : ''}
              onChange={handleChange}
            />
            <input
              type='date'
              name='tdate'
              value={data.tdate ? data.tdate : ''}
              onChange={handleChange}
            />
            <input
              type='text'
              name='guest'
              value={data.guest ? data.guest : ''}
              placeholder='How many people will be traveling with you?'
              onChange={handleChange}
            />
            <select
              name='accommodationtype'
              value={data.accommodationtype ? data.accommodationtype : ''}
              onChange={handleChange}
            >
              <option value=''>Select accommodation type</option>
              <option value='hotel'>Hotel</option>
              <option value='hostel'>Hostel</option>
              <option value='vacationRental'>Vacation Rental</option>
              <option value='other'>Other</option>
            </select>
            <input type='submit' value='Book now' onClick={handleSubmit} />
          </form>
        </div>
        </div>
    </>
  );
};
