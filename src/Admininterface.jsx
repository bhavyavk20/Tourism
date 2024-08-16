import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admininterface = () => {
    const [users, setUsers] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4003/viewusers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    console.log('users', users);




//     const verifyUser = async (userId) => {
//     try {
//     await axios.put(`http://localhost:7000/userverification/${userId}`);
//     setUsers(users.map(user => user._id === userId ? { ...user, verified: true } : user));
//   } catch (error) {
//     console.error('Error verifying user:', error);
//   }
// };


const handleVerify = async (userid) => {
    try {
        const response = await axios.patch(`http://localhost:4003/verification/${userid}`, {
            verified: true
        });

        setUsers((prevData) =>
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
        {users && (
            <>
                <div>
                    <h1>User Verification</h1>
                    <div className="container">
                    <table className='user-table ms-3 me-3'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                {/* <th>Last Name</th> */}
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                            <td>{`${user.fname} ${user.lname}`}</td>
                                    {/* <td>{user.fname} </td>
                                    <td>{user.lname}</td> */}
                                    <td>{user.email}</td>
                                    <td>{user.verified ? 'Verified' : 'Not Verified'}</td>
                                    <td>
                                        {!user.verified && (
                                            <button className='bg' style={{color:'white'}} onClick={() => handleVerify(user._id)}>Verify</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </>
        )}
    </>
    
    );
};

export default Admininterface;