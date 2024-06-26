import VirtualStyleSheet from "./Virtual.module.css";
import ReactCompareImage from "react-compare-image";
import Before from "../../../Img/before.png";
import After from "../../../Img/after.png";
import Shade from "../../../Img/shade.png";



const Virtual = () => {
  return (
    <div className={VirtualStyleSheet.virtual_page}>
      <div className={VirtualStyleSheet.Virtual}>

        <div className={VirtualStyleSheet.left}>
          <span>virtual try on</span>
          <span>never buy the wrong shade again</span>
          <span>try now!</span>
          <img src={Shade} alt="" />
        </div>

        <div className={VirtualStyleSheet.right}>
          <div className={VirtualStyleSheet.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Virtual;
