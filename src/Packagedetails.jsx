import axios from 'axios';
import './Explore.css';
import './Login.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Booking } from './Booking';

export const Packagedetails = () => {
  const [viewdata, setViewdata] = useState('');
  const { id } = useParams();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`http://localhost:4003/packagedetails/${id}`);
      console.log(response.data);
      setViewdata(response.data);
    };
    fetchData();
  }, []);

  const toggleBookModal = () => setIsBookModalOpen(!isBookModalOpen);

  return (
    <>
      {isBookModalOpen && <Booking onClose={toggleBookModal} />}
      <div className='flex-container'>
        <h2>{viewdata.places}</h2>
        <img src={`http://localhost:4003/uploads/${viewdata.image}`} alt='images' />
        <p>{viewdata.description}</p>
      </div>
      <div className='flex-container'>
                {viewdata.spots && viewdata.spots.map((spot, spotIndex) => (
                    <div key={spotIndex} className='cards'>
                        {spot.spotimage && (
                            <div className='cards-image-wrapper'>
                                <img src={spot.spotimage} alt='spot image' />
                                <p className='cards-content'>{spot.name}</p>
                            </div>
                        )}   
                    </div>
                ))}
            </div>
      <div className='btn-container'>
        <button className='read' onClick={toggleBookModal} id='red-link'>
          Book Now
        </button>
      </div>
    </>
  );
};
