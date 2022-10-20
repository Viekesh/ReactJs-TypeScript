import "../../../Styles/TabOption.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3F3",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];



const TabOption = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab_options">
      <div className="options_wrapper">

        {tabs.map((tab) => {
          return <div
            onClick={() => setActiveTab(tab.name)}
            className={`tab_item x_Y_axis_center ${activeTab === tab.name && "active_tab"}`}
            key={tab.id}
          >

            <div
              className="tab_img_container x_Y_axis_center"
              style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""}` }}
            >

              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                alt={tab.name}
                className="tab_image"
              />

            </div>

            <div className="tab_name">{tab.name}</div>

          </div>;
        })}

      </div>
    </div>
  );
};

export default TabOption;

// here we are creating tab element, when we are click on any tab the screen is changing
// to implement this feature we use onclick and creating a function "onClick={() => setActiveTab(tab.name)}"
// after we need to style these div where we have to implemented tab feature
// when we click any tab then the color of that tab is change, to do this we write classes "conditionally"
// to write conditional class you can use classes libraries or you can use literals
// literals we write in between the backticks (``)

// we conditionally write classes by using "$" sign and then "{}"

// className={`tab_item x_Y_axis_center ${activeTab === tab.name && "active_tab"}`}
// here when an active tab equal to tab.name its means an active tab which we get from parent component
// this is equal to the tab.name then applied this class
// this means the active_tab class is only applied to that particular tab icon which is currently active