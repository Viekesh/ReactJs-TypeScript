import "../../../Styles/DiningOut.css";
import ExploreSection from "../ExploreSection/ExploreSection";
import { restaurants } from "../ExploreSection/Restaurants";
import DeliveryCollections from "./Delivery/DeliveryCollections";



const restaurantList = restaurants;

const DiningOut = () => {
  return (
    <div>
      <DeliveryCollections />
      <ExploreSection list = {restaurantList} collectionNam = "Delivery Restaurants In Nagpur"  />
    </div>
  )
}

export default DiningOut;