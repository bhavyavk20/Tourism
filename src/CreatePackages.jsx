import React, { useState } from 'react';
import './CreatePackages.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Filebase64 from 'react-file-base64';


export const CreatePackages = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    places: '',
    district: '',
    price: '',
    description: '',
    spots: [],
    // hotels:[],
    image: ''

  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const addSpot = () => {
    const newSpot = { name: '', spotimage: null };
    setFormData({ ...formData, spots: [...formData.spots, newSpot] });
  };


  // const addHotel = () => {
  //   const newHotel = { name: '', hotelimage: null };
  //   setFormData({ ...formData, hotels: [...formData.hotels, newHotel] });
  // };

  const updateSpot = (index, key, value) => {
    const updatedSpots = [...formData.spots];
    updatedSpots[index][key] = value;
    setFormData({ ...formData, spots: updatedSpots });
    console.log(formData, '-=================');
  };

  // const updateHotel = (index, key, value) => {
  //   const updatedHotels = [...formData.hotels];
  //   updatedHotels[index][key] = value;
  //   setFormData({ ...formData, hotels: updatedHotels });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userid = localStorage.getItem('id');

    // if (formData.places && formData.district && formData.price && formData.description && selectedFile) {
    const dataToSend = new FormData();
    dataToSend.append('places', formData.places);
    dataToSend.append('district', formData.district);
    dataToSend.append('price', formData.price);
    dataToSend.append('description', formData.description);
    dataToSend.append('image', selectedFile);
    dataToSend.append('userid', userid);

    formData.spots.forEach((spot, index) => {
      dataToSend.append(`spotimage[${index}]`, spot.spotimage)
      dataToSend.append(`names[${index}]`, spot.name)
    })

    // formData.hotels.forEach((hotel, index) => {
    //   dataToSend.append(`hotelimage[${index}]`, hotel.hotelimage);
    //   dataToSend.append(`namess[${index}]`, hotel.name);
    // });

    try {
      const response = await axios.post('http://localhost:4003/createpackage', dataToSend);
      console.log(response);
      navigate('/agency/Explore');
      // toast.success('Success');
    }
    catch (error) {
      console.error(error);
      // toast.error('Error creating package');
    }
    // } else {
    //   toast.error('Please fill in all fields and select an image');
    // }
  };

  return (
    <>
      <h1>Create Packages</h1>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' name='places' value={formData.places} placeholder='Enter place name' onChange={handleChange} />
          <input type='text' name='district' value={formData.district} placeholder='District' onChange={handleChange} />
          <input type='text' name='price' value={formData.price} placeholder='Price' onChange={handleChange} />
          <textarea name='description' value={formData.description} placeholder='Description' onChange={handleChange}></textarea>
          <input type="file" name='image' onChange={handleFileChange} accept=".jpg, .jpeg, .png" multiple />
          <div className='mb-3'>
            <h2 style={{ color: 'seagreen' }}>Spots</h2>
            {formData.spots.map((spot, index) => (
              <div key={index} className='mb-2'>
                <div>
                  <label htmlFor={`spotName${index}`}><b>Spot Name</b></label>
                  <input
                    id={`spotName${index}`}
                    type='text'
                    placeholder='Spot Name'
                    value={spot.name}
                    onChange={(e) => updateSpot(index, 'name', e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor={`spotImage${index}`}><b>Spot Image</b></label>
                  <input
                    id={`spotImage${index}`}
                    type='file'
                    accept='image/*'
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          updateSpot(index, 'spotimage', reader.result);
                        };
                      }
                    }}
                  />
                </div>
              </div>
            ))}
            <input type='submit' value='Add Spot' onClick={addSpot} />
          </div>

          <div>
            <input type='submit' value='Create' />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
