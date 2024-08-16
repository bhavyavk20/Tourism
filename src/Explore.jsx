import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Explore.css';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Explore = () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4003/viewpackage/${id}`, {
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
        };
        fetchData();
    }, [id, token, refresh]);

    let handleDelete = async (id) => {
        setRefresh(!refresh);
        let response = await axios.delete(`http://localhost:4003/delete/${id}`);
        window.location.reload();
    };

    // Function to decode base64-encoded image and create data URL
    const decodeBase64Image = (imageData) => {
        return `data:image/jpeg;base64,${imageData}`;
    };

    return (
        <>
            <h1>Explore</h1>
            {error && <p>{error}</p>}
            <div className='flex-container'>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div className="card" key={index}>
                            <Link to={`/agency/Exploredetails/${item._id}`}>
                                <img src={`http://localhost:4003/uploads/${item.image}`} alt='images' />
                            </Link>                           
                             <div className="card-content">
                                <h2 className='title'>{item.places}</h2>
                                <p className='district'>{item.district}</p>
                                <p className='price'>{item.price}</p>
                                 <p className='description'>{item.description}</p>
                                <div className="icon-container">
                                    <Link to={`/agency/EditPackages/${item._id}`}><FaRegEdit /></Link>
                                    {/* <button><Link to={`/agency/Exploredetails/${item._id}`}>See more</Link></button> */}
                                    <FaTrash className='trash' onClick={() => { handleDelete(item._id) }} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </>
    );
};
