import React from "react";
import "./LoginComponent.css";



const FormInput = ({ type, placeholder }) => {
    return (
        <>
            <div className="form-field-holder">
                <input type={type} placeholder={placeholder} />
            </div>
        </>
    )
};



const LoginButton = ({ clicked }) => {
    return (
        <>
            <div className="form-field-holder">
                <button onClick={clicked}>Login</button>
            </div>
        </>
    )
}



const LoginComponent = () => {
    return (
        <>
            <div className="login_component">
                <span id="title">Login to your account</span>
                <FormInput type="text" placeholder="E-Mail" />
                <FormInput type="password" placeholder="Password" />
                <LoginButton clicked={() => alert("LoggedIn Successful")} />
            </div>
        </>
    )
}



export default LoginComponent;