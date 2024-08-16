import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Agencyinterface.css'; // Import CSS file for styling

const Agencyinterface = () => {
    const [agency, setagency] = useState('');

    useEffect(() => {
        const fetchagency = async () => {
            const response = await axios.get('http://localhost:4003/viewagencies');
            setagency(response.data);
        };
        fetchagency();
    }, []);

    const handleVerify = async (userid) => {
        try {
            const response = await axios.patch(`http://localhost:4003/verification/${userid}`, {
                verified: true
            });

            setagency((prevData) =>
                prevData.map((item) =>
                    item.id === userid ? { ...item, verified: true } : item
                )
            );

            console.log('User verified:', response.data);

            window.location.reload();
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };

    return (
        <>
            {agency && (
                <>
                    <h1>Agency Verification</h1>

                    <div className="container">
                        <table className='user-table ms-3 me-3'>
                            <thead>
                                <tr>
                                    <th>Agency Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agency.map((agencyItem) => (
                                    <tr key={agencyItem._id}>
                                        <td>{agencyItem.agencyname}</td>
                                        <td>{agencyItem.email}</td>
                                        <td>{agencyItem.verified ? 'Verified' : 'Not Verified'}</td>
                                        <td>
                                            {!agencyItem.verified && (
                                                <button className='bg' style={{ color: 'white' }} onClick={() => handleVerify(agencyItem._id)}>Verify</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default Agencyinterface;
