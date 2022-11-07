import Navigation from './Navigation';
import "../Styles/LandingPage.css";
import PortfolioLinks from './PortfolioLinks';
// import Tuts from '../../../Tuts/Tuts';
import StudentInfo from '../../../Tuts/Tuts';


const LandingPage = () => {
  return (
    <div className='landing_page'>
        <Navigation />
        {/* <Tuts /> */}
        <StudentInfo />
        <PortfolioLinks />
    </div>
  )
}

export default LandingPage;