import { useContext, useState } from "react";
import UserContext from "../UserContext";




const Login = () => {

    const [userName, setUserName] = useState("");

    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    // we can now send data with the help of handleSubmit function
    const handleSubmit = (event) => {
        event.preventDefault();

        setUser({ userName, password });
    }

    return (
        <>
            <h3>Login Form</h3>
            <form action="">
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}



export default Login;