import { useContext } from "react";
import UserContext from "../UserContext";




const Profile = () => {

    const { user } = useContext(UserContext);
    console.log("user:", user);

    if (!user) {
        return <div>Please Login</div>
    } else {
        return <div>Welcome {user.userName}</div>
    }
}



export default Profile;