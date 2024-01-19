import React from "react";
import PropTypes from "prop-types";



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



UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
}



export default UserCard;
