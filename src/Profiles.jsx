import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

export const Profiles = () => {
    const id = localStorage.getItem('id');
    const navigate = useNavigate();
    const [viewdata, setViewdata] = useState({});
    const [refresh, setRefresh] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4003/findauthor/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setViewdata(response.data);
            } catch (e) {
                console.log(e.response.data.message);
            }
        };

        if (!token) {
            navigate('/Login');
        } else {
            fetchData();
        }
    }, [id, token, navigate, refresh]);

  return (
    <>
     <div className="sidebar">
                <div>
                    <b>First name:</b> {viewdata.fname}<br/><br />
                    <b>Last name:</b> {viewdata.lname}<br/><br />
                    <b>Date of birth:</b> {viewdata.dob}<br/><br />
                    <b>Email:</b> {viewdata.email}<br/><br />
                    <b>Agency name:</b> {viewdata.agencyname}<br/><br />

                    {/* <b>Password:</b> {viewdata.pass}<br/> */}
                    {/* Confirm Password:{viewdata.cpass}<br /> */}
                    <Link to={`/agency/EditProfile`}>
                        <button id='btn'>Update</button>
                    </Link>
                </div>
            </div>
    </>
  )
}
