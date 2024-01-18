import React from "react";
import users from "./UsersData";
import UserCard from "./UserCard";
import "./Props.css";



const Props = () => {
    return (
        <>
            <div className="props">
                {
                    users.map(({ id, name, designation, photo, isAdmin }) => {
                        return (
                            <>
                                <UserCard
                                    id={id}
                                    name={name}
                                    designation={designation}
                                    photo={photo}
                                    isAdmin={isAdmin}
                                />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}



export default Props;