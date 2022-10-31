import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Navigation from '../MainComponents/LandingPage/Components/Navigation';



const SignUp = () => {

    let auth = getAuth;

    const [data, setData] = useState({});

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    }

    const handleSubmit = (event) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user);
            }).catch((error) => {
                alert(error.message);
                console.log(error.message);
            })
    }

    return (
        <>
        <Navigation />
        <div className="profile">
            <h2>SignUp Here</h2>
            <input
                type="email"
                name='email'
                placeholder='Enter Email'
                onChange={(event) => handleInput(event)}
            />
            <input
                type="password"
                name='password'
                placeholder='Enter Password'
                onChange={(event) => handleInput(event)}
            />
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default SignUp;