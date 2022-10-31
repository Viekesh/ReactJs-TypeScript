import React from 'react';
import { UserAuth } from '../Context/AuthContext';
import LogIn from './LogIn';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    
    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout;
            navigate('/');
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            Email : {user && user.email}

            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default Profile;