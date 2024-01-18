import React from "react";



const UserCard = ({ name, photo, designation, isAdmin }) => {
    return (
        <>
            <div className="child_compo">
                <div className="user_card">
                    <img src={photo} alt={name} />

                    <div className="user_name">{name}</div>

                    <div className="designation">{designation}</div>

                    {
                        isAdmin ? <div className="admin">A</div> : null
                    }
                </div>
            </div>
        </>
    )
}



export default UserCard;
