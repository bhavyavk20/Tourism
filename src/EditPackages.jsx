import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

export const EditPackages = () => {
    const navigate=useNavigate()
  const{id}=useParams()
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    places: '',
    district: '',
    price: '',
    description: '',
    image: ''
  });
 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.places && formData.district && formData.price && formData.description && selectedFile) {
        const dataToSend = new FormData();
        dataToSend.append('places', formData.places);
        dataToSend.append('district', formData.district);
        dataToSend.append('price', formData.price);
        dataToSend.append('description', formData.description);
        dataToSend.append('image', selectedFile);

        try {
            let response = await axios.put(`http://localhost:4003/updatepackage/${id}`, dataToSend);
            console.log(id, 'hthyjyju');
            if (response) {
                navigate('/agency/Explore')
                // alert('Package updated');
            }
        } catch (error) {
            console.log('error', error);
        }
    } else {
        toast.error('Please fill in all fields');
    }
}
  return (
    <>
    <h1>Edit Packages</h1>
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='places' value={formData.places} placeholder='Places' onChange={handleChange} />
        <input type='text' name='district' value={formData.district} placeholder='District' onChange={handleChange} />
        <input type='text' name='price' value={formData.price} placeholder='Price' onChange={handleChange} />
        <textarea name='description' value={formData.description} placeholder='Description' onChange={handleChange}></textarea>
        <input type="file" name='image' onChange={handleFileChange} accept=".jpg, .jpeg, .png" />
        <div>
          <input type='submit' value='Edit' />
        </div>
      </form>
    </div>
    <ToastContainer />
    </>

  )
}

