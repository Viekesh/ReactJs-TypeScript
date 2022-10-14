import "../Styles/PortfolioLinks.css";



const PortfolioLinks = () => {
  return (
    <div className="portfolio_links">

      <input type="checkbox" id="eqr-click" />

      <label for="eqr-click">
        <div className="eqr x_y_axis_center" id="enquiry">
          <h1>Enquiry<br />Now</h1>
        </div>
      </label>

      <a href="https://www.github.com" className="links github"></a >

        <a href="https://www.linkedin.com/in/vikesh-gaikwad-994872194" className="links linkedin"></a >

        <a href="mailto:vikesh.g99@gmail.com" className="links mail"></a >

        {/* <a href="https://telegram.me/VIK" className="links telegram"></a> */}

        <a href="tel:+919766940948" className="links call"></a>

    </div>
  )
}

export default PortfolioLinks;