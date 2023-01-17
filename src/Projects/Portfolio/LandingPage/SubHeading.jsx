import "./SubHeading.scss";

const SubHeading = (props) => {
  return (
    <div className='sub_heading y_axis_center' id="subHeading"><h3>{props.heading}</h3></div>
  )
}

export default SubHeading;