import ExploreCard from "./ExploreCard.jsx";
import "../../../Styles/ExploreSection.css";

const ExploreSection = ({list, collectionNam}) => {
  return (
    <div className="explore_section">
      <div className="collection_title">{collectionNam}</div>
      <div className="explore_grid">
        {list.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  )
}

export default ExploreSection;