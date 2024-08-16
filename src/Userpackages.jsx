import React, { useEffect, useState } from 'react'
import './Explore.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Userpackages = () => {

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    const [data,setData]=useState([]);
    const [error,setError]=useState('');
    const[refresh,setRefresh]=useState(false);


    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response = await axios.get(`http://localhost:4003/packages`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.message || 'Error fetching data');
                } else if (error.request) {
                    setError('Network error. Please try again.');
                } else {
                    setError('Error fetching data');
                }
            }
        }
        fetchData();
    },[id,token,refresh])

  return (
    <>
{error && <p>{error}</p>}
            <div className='flex-container'>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={`http://localhost:4003/uploads/${item.image}`} alt='images' />
                            <div className="card-content">
                                <h2 className='title'>{item.places}</h2>
                                <p className='district'>{item.district}</p>
                                <p className='price'>{item.price}</p>
                                <div className="btn-container">
                                    <button className='read'><Link to={`/user/Packagedetails/${item._id}`} id='red-link'>Read More...</Link></button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
    </>
  )
}
