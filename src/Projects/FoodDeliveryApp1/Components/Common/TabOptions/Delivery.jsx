import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import "../../../Styles/Delivery.css";
import Filter from "./Filter";



const deliveryFilters = [
  {
    id: 1,
    icon: <div><DeliveryDiningIcon /></div>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <RoomServiceIcon />,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const Delivery = () => {
  return (
    <div>
      <Filter filterList = {deliveryFilters} />
    </div>
  )
}

export default Delivery;