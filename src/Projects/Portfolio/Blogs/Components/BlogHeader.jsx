import { NavLink } from "react-router-dom";
import BottomNav from "../../Navigation/BottomNav";
import TopNav from "../../Navigation/TopNav";
import CreateIcon from "@mui/icons-material/Create";
import "./BlogHeader.scss";
import { useEffect, useState } from "react";
import { auth } from "../../../../FirebaseConfig";
import PageHeading from "../../LandingPage/PageHeading";



const BlogHeader = ({ crudActive, setCrudActive }) => {

  const [userName, setUsersName] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUsersName(authUser)
      } else {
        setUsersName(null);
      }
    })
  });

  const userId = userName?.uid;

  return (
    <div className="blog_header">
      {userId ? (
        <div className="crud_links y_axis_center">
          {/* <NavLink to="/Update" className="link update_link x_y_axis_center">
            <CreateIcon />
          </NavLink> */}

          <NavLink to="/Create" className="link create_link x_y_axis_center">
            <CreateIcon />
          </NavLink>
        </div>
      ) : "" }
    </div>
  );
  
};

export default BlogHeader;


