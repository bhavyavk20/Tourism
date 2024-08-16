import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Exploredetails.css';

export const Exploredetails = () => {
    const [viewdata, setViewdata] = useState({ places: '', image: '', description: '', spots: [] });
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4003/packagedetails/${id}`);
                console.log(response.data);
                setViewdata(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            <h1>Spots</h1>
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
        </>
    );
};
