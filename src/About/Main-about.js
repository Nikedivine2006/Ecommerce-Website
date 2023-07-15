import React from "react";
import Navbar from "../pages/Navbar/Main-Navbar";
// import agent1 from "./agent1.png";
import "./about.css";
import AbouttBanner from "./retail-ecommerce-banner.jpg";
import AboutQuote from "./aboutBanner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="About-header">
          <h1> About Us. </h1>
          <div className="Aboust-text">
            <p>
              Welcome to BestShop, your ultimate destination for all your online
              shopping needs. We are a leading ecommerce platform dedicated to
              providing you with a convenient, secure, and enjoyable shopping
              experience. At BestShop, we understand the ever-changing demands
              of the online marketplace. That's why we have curated a vast array
              of products across numerous categories to cater to your diverse
              preferences. Whether you're searching for fashion apparel,
              electronics, home essentials, or even unique finds from local
              sellers, we have you covered. Our mission is to empower both
              buyers and sellers, creating a thriving online community where
              everyone can discover, connect, and transact. We foster an
              inclusive and vibrant environment where small businesses and
              entrepreneurs can showcase their products and reach a wider
              audience. By supporting these sellers, we aim to promote economic
              growth and provide shoppers with a wide range of choices. At the
              heart of our business lies a commitment to customer satisfaction.
              Our dedicated team works tirelessly to ensure that your shopping
              experience is seamless from start to finish. We provide
              user-friendly interfaces, secure payment options, and efficient
              delivery services to ensure that your purchases arrive at your
              doorstep in no time. We value the trust you place in us, and we
              continuously strive to improve and innovate to meet your evolving
              needs. With BestShop, you can shop with confidence, knowing that
              we are dedicated to providing you with the best online shopping
              experience possible. Thank you for choosing BestShop as your go-to
              ecommerce platform. Start exploring and indulge in the joy of
              shopping today!
            </p>
          </div>

          <div className="About-banner">
            <img src={AbouttBanner} alt="" />
          </div>

          <div className="About-work">
            <div>
              <h3>
                "
                <br />
                Discover, shop, and redefine convenience—your one-stop
                destination for all your online shopping desires.
                <br />"
              </h3>
            </div>
            <div>
              <img src={AboutQuote} alt="" />
            </div>
          </div>

          {/* <div className="About-Team">
            <div className="d-grid">
              <div className="col">
                <img src={agent1} alt=""/>
              </div>
              <div className="col">
              <img src={agent1} alt=""/>
              </div>
              <div className="col">
              <img src={agent1} alt=""/>
              </div>
              <div className="col">
              <img src={agent1} alt=""/>
              </div>
              <div className="col">
              <img src={agent1} alt=""/>
              </div>
              <div className="col">
              <img src={agent1} alt=""/>
              </div>
            </div>

            <div className="Team">
              <h1>Delivery Worker.</h1>
              <p>
                The BestShop eCommerce team is dedicated to delivering
                exceptional online shopping experiences. They meticulously
                curate a diverse product catalog, ensuring the availability of
                popular and high-quality items. With their expertise in web
                design and development, they create an intuitive and
                user-friendly website that reflects the brand's identity. The
                team employs effective marketing strategies, leveraging SEO
                techniques and social media platforms to drive traffic and
                increase conversions. They constantly analyze customer data and
                behavior to optimize product listings, pricing strategies, and
                inventory management. By staying up-to-date with industry
                trends, the BestShop eCommerce team strives to provide customers
                with the best possible online shopping experience.
              </p>
              <div className="d-flex">
              <div>
                <h3>600</h3>
                <p>Workers</p>
              </div>

              <div>
                <h3>700</h3>
                <p>Delivery Agent</p>
              </div>

              <div>
                <h3>1.2B</h3>
                <p>Delivery Each Months</p>
              </div>

              <div>
                <h3>2B</h3>
                <p>Sales</p>
              </div>
            </div>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
