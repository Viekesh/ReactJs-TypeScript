import "./PageHeading.scss";

const PageHeading = (props) => {
  return (
    <div className="page_head x_y_axis_center">
      <h3>{props.heading}</h3>
    </div>
  );
};

export default PageHeading;


