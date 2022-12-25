import { NavLink } from "react-router-dom";
import BottomNav from "../../Navigation/BottomNav";
import TopNav from "../../Navigation/TopNav";
import CreateIcon from "@mui/icons-material/Create";
import "./BlogHeader.scss";

const BlogHeader = ({ crudActive, setCrudActive }) => {
  return (
    <div className="blog_header">
      <TopNav />
      <BottomNav />
      <div className="crud_links y_axis_center">
        <NavLink to="/Update" className="link update_link x_y_axis_center">
          <CreateIcon />
        </NavLink>

        <NavLink to="/Create" className="link create_link x_y_axis_center">
          <CreateIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogHeader;
