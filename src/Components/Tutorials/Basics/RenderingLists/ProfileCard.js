import React from "react";



const ProfileCard = ({ data }) => {
    return (
        <div className="profile_card">
            <img className="profile_pic" src={data.profilePic} alt={data.name} />
            <div className="profile_name">{data.name}</div>
            <div className="profile_email">{data.email}</div>
            <div className="profile_phone">{data.phone}</div>
        </div>
    );
};



export default ProfileCard;
