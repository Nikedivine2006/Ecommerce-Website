import { React, useState, useEffect } from "react";
import { Carousel, ProgressBar } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img1 from "./BodyImg/ps4.png";
import Img2 from "./BodyImg/home.png";
import Img3 from "./BodyImg/a.jpg";
import Img4 from "./BodyImg/iphone watch.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
// import bannerImg1 from './BodyImg/sale.avif';
// import bannerImg2 from './BodyImg/sales1.jpg';
import Footer from "../../footer/Footer";

function Body() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const NewCountdown = new Date();
    NewCountdown.setDate(NewCountdown.getDate() + 5);

    const interval = setInterval(() => {
      const Now = new Date().getTime();
      const TimeLeft = NewCountdown - Now;

      if (TimeLeft < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  }, []);
  return (
    <div className="container main-Body">
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="d-flex">
            <div className="slider1">
              <div>
                <img className="d-block w-100" src={Img1} alt="First slide" />
              </div>
              <div className="Slider1-Info">
                <div className="Discount">-23%</div>
                <div>
                  <h3>Sony Playstation 4 controller White</h3>
                </div>
                <div className="ratingIcon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <div className="d-flex">
                  <span>$550.00</span>
                  <p>$339.00</p>
                </div>

                <div className="range">
                  <div className="d-flex">
                    <h4>
                      Available: <span>15</span>
                    </h4>
                    <h4>
                      Sold: <span>20</span>
                    </h4>
                  </div>
                  <div className="range">
                    <ProgressBar
                      variant="warning"
                      now={30}
                      className="rangeBar"
                    />
                  </div>

                  <p className="timerText">Time Limit Left:</p>
                  <div className="timer">
                    <div>
                      {countdown.days}
                      <p>Days</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.hours}
                      <p>Hours</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.minutes}
                      <p>Minutes</p>
                    </div>
                    <span>:</span>
                    <div>
                      {countdown.seconds}
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider1 slider2">
              <div>
                <img className="d-block w-100" src={Img2} alt="First slide" />
              </div>
              <div className="Slider1-Info">
                <div className="Discount">-45%</div>
                <div>
                  <h3>Apple wire-less headphone 4k</h3>
                </div>
                <div className="ratingIcon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <div className="d-flex">
                  <span>$100.00</span>
                  <p>$45.00</p>
                </div>

                <div className="range">
                  <div className="d-flex">
                    <h4>
                      Available: <span>12</span>
                    </h4>
                    <h4>
                      Sold: <span>9</span>
                    </h4>
                  </div>
                  <div className="range">
                    <ProgressBar
                      variant="warning"
                      now={50}
                      className="rangeBar"
                    />
                  </div>

                  <p className="timerText">Time Limit Left:</p>
                  <div className="timer">
                    <div>
                      {countdown.days}
                      <p>Days</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.hours}
                      <p>Hours</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.minutes}
                      <p>Minutes</p>
                    </div>
                    <span>:</span>
                    <div>
                      {countdown.seconds}
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="d-flex">
            <div className="slider1">
              <div>
                <img className="d-block w-70" src={Img3} alt="First slide" />
              </div>
              <div className="Slider1-Info">
                <div className="Discount">-23%</div>
                <div>
                  <h3>Sony Playstation 4 controller White</h3>
                </div>
                <div className="ratingIcon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <div className="d-flex">
                  <span>$550.00</span>
                  <p>$339.00</p>
                </div>

                <div className="range">
                  <div className="d-flex">
                    <h4>
                      Available: <span>15</span>
                    </h4>
                    <h4>
                      Sold: <span>20</span>
                    </h4>
                  </div>
                  <div className="range">
                    <ProgressBar
                      variant="warning"
                      now={30}
                      className="rangeBar"
                    />
                  </div>

                  <p className="timerText">Time Limit Left:</p>
                  <div className="timer">
                    <div>
                      {countdown.days}
                      <p>Days</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.hours}
                      <p>Hours</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.minutes}
                      <p>Minutes</p>
                    </div>
                    <span>:</span>
                    <div>
                      {countdown.seconds}
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider1 slider2 ">
              <div>
                <img className="d-block w-100" src={Img4} alt="First slide" />
              </div>
              <div className="Slider1-Info">
                <div className="Discount">-23%</div>
                <div>
                  <h3>Apple wire-less headphone 4k</h3>
                </div>
                <div className="ratingIcon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <div className="d-flex">
                  <span>$100.00</span>
                  <p>$45.00</p>
                </div>

                <div className="range">
                  <div className="d-flex">
                    <h4>
                      Available: <span>12</span>
                    </h4>
                    <h4>
                      Sold: <span>9</span>
                    </h4>
                  </div>
                  <div className="range">
                    <ProgressBar
                      variant="warning"
                      now={50}
                      className="rangeBar"
                    />
                  </div>

                  <p className="timerText">Time Limit Left:</p>
                  <div className="timer">
                    <div>
                      {countdown.days}
                      <p>Days</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.hours}
                      <p>Hours</p>
                    </div>{" "}
                    <span>:</span>
                    <div>
                      {countdown.minutes}
                      <p>Minutes</p>
                    </div>
                    <span>:</span>
                    <div>
                      {countdown.seconds}
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* </div> */}

      <Footer />
    </div>
  );
}

export default Body;
