import { useState } from "react";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import TabOption from "../Components/Common/TabOptions/TabOption";
import "../Styles/HomePage.css";



const HomePage = () => {

  // "TabOptions" have three different screens
  // we are use here "useState" hook, state will decide which screen we are seen crrently
  // "useState" hook provides a function and variable, we can able to change already stored value
  // in that variable
  // syntax :
  // const randomName [variable, function] = useState("initial value")

  // according to your current need you can paas value in "useState", sometimes you can pass
  // blank space because many cases there is no value we can pass in it
  // here we will use our initial value is "Delivery", it is one of the tab options screen
  // which we want to see on our screen, so our default screen is delivery.

  const [activeTab, setActiveTab] = useState("Delivery");

  return (

    <div className="home_page">

      <Header />

      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}

      <Footer />

    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <div>Delivery</div>

    case "Dining Out":
      return <div>Dining Out</div>
    
    case "Nightlife" :
      return <div>Nightlife</div>

    default:
      return <div>Delivery</div>
  }
}

export default HomePage;