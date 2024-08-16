import React from 'react';
import agency1 from './office copy.jpg';
import './Agencyhome.css';

export const Agencyhome = () => {
  return (
    <div className='image-container'>
      <img src={agency1} alt="Agency Office" className='img-fluid' />
    </div>
  );
};
