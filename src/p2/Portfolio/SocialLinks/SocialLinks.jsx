import CallIcon from "@mui/icons-material/Call";
import "./SocialLinks.scss";

const SocialLinks = () => {
  return (
    <>
      <div className="portfolio_links x_y_axis_center">

        <div className="call_animate x_y_axis_center">
          <a href="tel:+919766940948" className="links call x_y_axis_center">
            <CallIcon />
          </a>
        </div>

      </div>
    </>
  );
};

export default SocialLinks;
