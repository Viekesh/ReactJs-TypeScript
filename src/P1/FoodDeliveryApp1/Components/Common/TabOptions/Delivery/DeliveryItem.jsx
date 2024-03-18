import "../../../../Styles/DeliveryItem.css";

const DeliveryItem = ({item}) => {
  return (
    <div className="delivery_item">
        <div className="delivery_item_cover">
            <img 
            src={item.cover}
            alt={item.title}
            className='delivery_item_img'
            />
        </div>
        <div className='delivery_item_title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem;