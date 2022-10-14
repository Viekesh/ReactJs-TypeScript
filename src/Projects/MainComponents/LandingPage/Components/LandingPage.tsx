import Navigation from './Navigation';
import "../Styles/LandingPage.css";
import PortfolioLinks from './PortfolioLinks';


const LandingPage = () => {
  return (
    <div className='landing_page'>
        <Navigation />
        <PortfolioLinks />
    </div>
  )
}

export default LandingPage;