import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const AgencyProfile = () => {

    // const id = localStorage.getItem('id')
    // console.log(id, 'gt');

    const [viewdata, setViewdata] = useState(['']);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    let token = localStorage.getItem('token')
    console.log(token);

    useEffect(() => {

        let fetchdata = async () => {
            try {
                const id = localStorage.getItem('id')
                console.log(id, 'gt');
                let response = await axios.get(`http://localhost:4003/findauthor/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response.data);
                setViewdata(response.data);
            }
            catch (e) {
                console.log(e.response.data.message);
            }
        }
        if (token == null) {
            navigate('/Login')
        }
        else {
            fetchdata()
        }
        fetchdata()
    }, [refresh])


    const [data, setData] = useState('');

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
// Frontend Code - submitdata function
const submitdata = async (event) => {
    event.preventDefault();
    try {
        const id = localStorage.getItem('id');
        let response = await axios.put(`http://localhost:4003/update/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('response', response);
        if (response) {
            navigate('/user/Profile')
            // alert('Profile updated successfully');
            setRefresh(!refresh); // Trigger useEffect to fetch updated data
        }
    } catch (error) {
        console.log("error", error);
    }
}


  return (
    <>
    <div>
        <h1>Profile</h1>
        <div className='container'>
            <form className="form">
                First name <input type='text' onChange={handleChange} placeholder={viewdata.fname} name='fname'  />
                Last name: <input type='text' onChange={handleChange} placeholder={viewdata.lname} name='lname'  />
                Date of birth: <input type='date' onChange={handleChange} placeholder={viewdata.dob} name='dob' />
                Email:<input type='text' onChange={handleChange} placeholder={viewdata.email} name='email'  /><br />
                {/* Password: <input type='text' onChange={handleChange}placeholder={viewdata.pass} name='pass'   /><br /> */}
                {/* Confirm Password: <input type='text' onChange={handleChange}placeholder={viewdata.cpass} name='cpass'  /><br /> */}
                <input type='submit' id='btn' value='Update' onClick={submitdata} />
            </form>
        </div>
    </div>
</>
  )
}
