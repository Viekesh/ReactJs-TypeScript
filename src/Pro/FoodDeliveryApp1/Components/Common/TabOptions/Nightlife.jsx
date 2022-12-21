import "../../../Styles/Nightlife.css";
import TopBrands from "../../TopBrands/TopBrands";
import ExploreSection from "../ExploreSection/ExploreSection";
import { restaurants } from "../ExploreSection/Restaurants";



const restaurantList = restaurants;

const Nightlife = () => {
  return (
    <div>
      <TopBrands />
      <ExploreSection list = {restaurantList} collectionNam = "Delivery Restaurants In Nagpur" />
    </div>
  )
}

export default Nightlife;