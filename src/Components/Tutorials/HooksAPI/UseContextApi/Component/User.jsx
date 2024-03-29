import React, { useContext } from "react";
import UserCtx from "./CTX/UserCTX";

const User = () => {
    const { name, lastLogged } = useContext(UserCtx);
    return (
        <>
            <div className="user">Welcome back, {name}</div>
            <div className="last-logged">
                Last logged in: {lastLogged.toUTCString()}
            </div>
        </>
    );
};

export default User;
