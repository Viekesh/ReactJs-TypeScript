import "../../../../Styles/FilterItem.css";

const FilterItem = ({filter}) => {
  return (
    <div className="filter_item x_y_axis_center">
        {filter.icon && filter.icon}
        <div className="filter_name">{filter.title}</div>
    </div>
  )
}

export default FilterItem;