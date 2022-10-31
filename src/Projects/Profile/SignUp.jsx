import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../MainComponents/LandingPage/Components/Navigation';
import { UserAuth } from '../Context/AuthContext';



const SignUp = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const {createUser} = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await createUser(email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
            setError(error.code);
        }
    }

    return (
        <>
        <Navigation />
        <form className="profile" onSubmit={handleSubmit}>
            <h2>SignUp Here</h2>
            <input
                type="email"
                name='email'
                placeholder='Enter Email'
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                name='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
            />
            
            <button>Submit</button>
        </form>
        </>
    )
}

export default SignUp;