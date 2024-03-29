import "./MainContent.scss";



const MainContent = ({ heading, para }) => {


    const textAnimate = () => {
        document.getElementById("PageHeading").style.marginLeft = 0 + "px";
        document.getElementById("PagePara").style.padding = 0 + "px";

        const display = () => {
            document.getElementById("PageHeading").style.opacity = 1;
            document.getElementById("PagePara").style.opacity = 1;
        }

        display();
    }

    const animateDelay = () => {
        setTimeout(textAnimate, 2000);
    }



    return (
        <>
            <div className="content_page" onLoad={animateDelay()}>
                <h1 id="PageHeading" className="lexend">{heading}</h1>
                <br />
                <p id="PagePara" className="lexend">{para}</p>
            </div>
        </>
    )
}



export default MainContent;