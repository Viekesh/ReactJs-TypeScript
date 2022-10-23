import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';



let img1, img2, img3;
img1 = "https://www.smartdatacollective.com/wp-content/uploads/2017/09/Algorithmic-Trading.jpeg";
img2 = "https://www.bkconnection.com/system/refinery/blog/posts/thumbnails/000/009/062/original/Algorithmic_Trading.jpg?1512393484";
img3 = "http://seangtkelley.me/img/blog/2018-08-05-algo-trading-pt1/thumbnail.jpg";

const start = [(img1), (img2), (img3)];

const Slider = () => {
    return (
        <>
            <div className='slider'>
                <Carousel fade>
                    {
                        start.map((img) => (
                            <Carousel.Item>
                                <img src={img} alt="First Slide" className='d-block w-100 banner-img' />
                                <Carousel.Caption>
                                    {/* <div className="banner-title"><h3>Aanalytics</h3></div> */}
                                </Carousel.Caption>

                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Slider;