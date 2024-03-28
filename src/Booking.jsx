import React from 'react';
import img4 from './n1.jpg';
import './Booking.css'; // Import CSS file for styling

export const Booking = () => {
  return (
    <>
      <h1>Booking</h1>
      <div className='booking-container'>
        <div className='book'>
          <img src={img4} alt="image" className='img-fluid'/>
        </div>
        <div className='booking-right'>
          <form action="">
            <input type="text" name='name' placeholder='Enter your name' />
            <input type="text" name='email' placeholder='abcd@gmail.com'/>
            <input type="text" name='destination' placeholder='Where to' />
            <input type="date" name='fdate'/>
            <input type="date" name='tdate'/>
            <textarea  name="description" rows="4" cols="50" placeholder='Description'></textarea>
            <input type="submit" value="Book now" />
          </form>
        </div>
      </div>
    </>
  );
}
