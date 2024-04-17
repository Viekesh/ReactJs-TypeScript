import React, { useState } from 'react';
import "./HandleInput.scss";



const HandleInput = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        privileges: {
            Author: false,
            Moderator: false,
            Reviewer: false,
        },
        verification: '',
    });

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? { ...prevState[name], [value]: checked } : value,
        }));
    };

    const handleVerificationChange = (event) => {
        setFormData({ ...formData, verification: event.target.value });
    };

    return (
        <div className="handle_input form">
            {/* Name, Email, and Phone fields */}
            <div className="field-holder">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </div>
            <div className="field-holder">
                <input
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </div>

            <div className="field-holder">
                <input
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                />
            </div>

            {/* Privileges checkboxes */}
            <div className="field-holder">
                <p>Privileges</p>
                <br />
                <label className='y_axis_center'>
                    Author:
                    <input
                        type="checkbox"
                        name="privileges"
                        value="Author"
                        onChange={handleChange}
                        checked={formData.privileges.Author}
                    />
                </label>
                <br />
                <br />
                <label className='y_axis_center'>
                    Moderator:
                    <input
                        type="checkbox"
                        name="privileges"
                        value="Moderator"
                        onChange={handleChange}
                        checked={formData.privileges.Moderator}
                    />
                </label>
                <br />
                <br />
                <label className='y_axis_center'>
                    Reviewer:
                    <input
                        type="checkbox"
                        name="privileges"
                        value="Reviewer"
                        onChange={handleChange}
                        checked={formData.privileges.Reviewer}
                    />
                </label>
            </div>

            {/* Verification radio buttons */}
            <div className="field-holder">
                <p>Verification</p>
                <br />
                <label className='y_axis_center'>
                    Phone:
                    <input
                        type="radio"
                        name="verification"
                        value="Phone"
                        onChange={handleVerificationChange}
                        checked={formData.verification === 'Phone'}
                    />
                </label>
                <label className='y_axis_center'>
                    E-Mail:
                    <input
                        type="radio"
                        name="verification"
                        value="E-Mail"
                        onChange={handleVerificationChange}
                        checked={formData.verification === 'E-Mail'}
                    />
                </label>
            </div>

            {/* Separator and output */}
            <div className="separator" />
            {/* <div className="output">
                <ul>
                    {Object.entries(formData).map(([key, value]) => (
                        <li key={key}>
                            <b>{key}</b>: {typeof value === 'object' ? JSON.stringify(value) : value}
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default HandleInput;
