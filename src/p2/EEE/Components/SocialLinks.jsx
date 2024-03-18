import "./SocialLinks.scss";
import { socialNetData } from "../Data/Data";

const SocialLinks = () => {
  return (
    <div className="social_links_elements">
      {socialNetData.map((links) => {
        return (
          <div key={links.id}>
            <a href={links.link} className="social_links">
              <h3>{links.name}</h3>
              <img src={links.img} alt="logo" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;