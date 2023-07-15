import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import BannerImg1 from "./banner/home-img-3.png";
import BannerImg2 from "./banner/home-img-2.png";
import BannerImg3 from "./banner/home-img-1.png";
import icon8 from "./banner/icon-8.png";
import icon2 from "./banner/rocket.png";
import icon3 from "./banner/money.png";
import icon4 from "./banner/icon4.png";
import icon5 from "./banner/icon5.png";
import "./Banner.css";

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" container">
      <div className="BannerSlider">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="Banner">
            <div className="d-flex">
              <img
                className="d-block w-100"
                src={BannerImg1}
                alt="First slide"
              />

              <Carousel.Caption className="Carousel-Info">
                <h3>NEW HEAD-PHONE COMPARE MODEL AIR</h3>
                <p>Awaken Your In-Between Moments</p>
                <button>SHOP NOW</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item className="Banner1">
            <div className="d-flex">
              <img
                className="d-block w-100"
                src={BannerImg2}
                alt="Second slide"
              />

              <Carousel.Caption className="Carousel-Info">
                <h3>NEW RISK-WATCHES MADE 30 CRATE DIAMOND</h3>
                <p>Wear The Latest Model</p>
                <button>SHOP NOW</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item className="Banner2">
            <div className="d-flex">
              <img
                className="d-block w-100"
                src={BannerImg3}
                alt="Third slide"
              />

              <Carousel.Caption className="Carousel-Info">
                <h3>NEW SMART-PHONE COMPARE MODEL AIR</h3>
                <p>Awaken Your In-Between Moments</p>
                <button>SHOP NOW</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>


       <div className="Categories">
        <div className="feat">
          <img src={icon8}  alt=""/>
          <div className="featInfo">
            <h2>Accurate Time</h2>
            <p>less than an 1hr</p>
          </div>
        </div>
        <div className="feat">
          <img src={icon2}  alt=""/>
          <div className="featInfo">
            <h2>Free Shipping</h2>
            <p>For $99.9</p>
          </div>
        </div>
        <div className="feat">
          <img src={icon3}  alt=""/>
          <div className="featInfo">
            <h2>Money Garantee</h2>
            <p>30 days back</p>
          </div>
        </div>
        <div className="feat">
          <img src={icon4}  alt=""/>
          <div className="featInfo">
            <h2>Online Support</h2>
            <p>24/hours daliy</p>
          </div>
        </div>
        <div className="feat">
          <img src={icon5}  alt=""/>
          <div className="featInfo">
            <h2>Sales 100%</h2>
            <p>Secure Shipping</p>
          </div>
        </div>
       </div>

      <div className="ImgSlider">
        <h2>Popular Categories</h2>
        <div className="border"><div></div></div>
        <div className="d-flex">
        <div className="slideImg Row1">
        <div className="SlideInfo">
          Smartphones
        </div>
        </div>

        <div className="slideImg Row2">
          <div className="SlideInfo">
            Television
          </div>
        </div>
        <div className="slideImg Row3">
        <div className="SlideInfo">
          Foods
        </div>
        </div>
        <div className="slideImg Row4">
        <div className="SlideInfo">
         Speaker
        </div>
        </div>
        <div className="slideImg Row5">
        <div className="SlideInfo">
          Shoes
        </div>
        </div>

        <div className="slideImg Row6">
        <div className="SlideInfo">
          Fans
        </div>
        </div>

        <div className="slideImg Row7">
        <div className="SlideInfo">
          Hearpods
        </div>
        </div>

        <div className="slideImg Row8">
        <div className="SlideInfo">
          Generator
        </div>
        </div>

        <div className="slideImg Row9">
        <div className="SlideInfo">
          Best Seller
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Banner;
