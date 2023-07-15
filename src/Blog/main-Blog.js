import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import PostImg1 from './banner5.png';
import PostImg2 from './banner6.gif';
import PostImg3 from './banner8.gif';
import Navbar from "../pages/Navbar/Main-Navbar";

import {
  faThumbsUp,
  faCommentAlt,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
function Blog() {
  return (
    <>
    <Navbar />
      <div className="main-Blog">
        <div className="Blog-header">
          <div className="container">
            <h1>Welcome To Our Blog</h1>
            <p>
              "Unbeatable deals, shop now and experience the ultimate online
              shopping extravaganza!"
            </p>
            <button>
              Learn more <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>

        <div className="sides container">
          <div className="left-side1">
            <div className="Img"></div>
            <div className="Blog_description">
              <h1>Mazimum Sales this Month:</h1>
              <p>
                "Unleashing an unstoppable sales storm, our ecommerce website
                reached unprecedented heights this month, smashing previous
                records with maximum sales. Unbeatable offers and exceptional
                customer experience drove this remarkable achievement,
                solidifying our position as an industry leader. Our dedicated
                team's tireless efforts, strategic marketing campaigns, and
                seamless user interface combined to create a winning formula for
                success. With customer satisfaction at the forefront, our
                ecommerce platform continues to thrive, attracting and retaining
                a loyal customer base. This outstanding performance demonstrates
                our commitment to excellence and positions us for continued
                growth and prosperity in the future."
              </p>
              <div className="btn">
                <button>Read More</button>
              </div>
              <div className="Social-icons">
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faCommentAlt} />
                <FontAwesomeIcon icon={faShareSquare} />
              </div>
            </div>

            <div className="Img2"></div>
            <div className="Blog_description">
              <h1>Rise in Customer Experience</h1>
              <p>
              The relentless focus on enhancing customer experience has led to a remarkable rise in satisfaction levels. By prioritizing seamless interactions, personalized services, and prompt issue resolution, we have elevated our customers' overall journey. This positive transformation has resulted in increased loyalty, higher repeat purchases, and glowing reviews. Our commitment to continuous improvement and customer-centricity will continue to drive our success, fostering long-lasting relationships and propelling our brand forward.
              </p>
              <div className="btn">
                <button>Read More</button>
              </div>

              <div className="Social-icons">
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faCommentAlt} />
                <FontAwesomeIcon icon={faShareSquare} />
              </div>
            </div>



            <div className="Img1"></div>
            <div className="Blog_description">
              <h1>Marketing Sales increase:</h1>
              <p>
              Our strategic marketing efforts have paid off tremendously, as we achieved an exceptional 80% increase in sales. The well-crafted campaigns, coupled with compelling messaging, captivated our target audience and led to a surge in customer engagement and conversions. This significant boost in sales solidifies our position as a market leader and highlights the effectiveness of our marketing strategies. We will continue to innovate and refine our approach to sustain this impressive growth in the future.
              </p>
              <div className="btn">
                <button>Read More</button>
              </div>
              
              <div className="Social-icons">
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faCommentAlt} />
                <FontAwesomeIcon icon={faShareSquare} />
              </div>
            </div>
          </div>
          <div className="right-side1">
            <div className="BlogSearch">
                <h2>Search</h2>
            <input type="search"  placeholder="Search Blog..."/>
            <FontAwesomeIcon icon = {faSearch}  className="SearchIcon"/>
            </div>

            <div className="Categories">
              <ul>
                <h2>Categories</h2>
                <li>Electronics<span>(300)</span></li>
                <li> Fashion and Apparel<span>(1000)</span></li>
                <li>Home and Kitchen <span>(500)</span></li>
                <li>Beauty and Personal Care <span>(700)</span></li>
                <li>Health and Wellness <span>(500)</span></li>
                <li>Sports and Fitness <span>(100)</span></li>
              </ul>
            </div>

            <div className="BlogPost">
                <h3>Recent Post</h3>
                <div className="d-flex">
                    <div className="PostImg">
                    <img src = {PostImg1}  alt=""/>
                    </div>
                    <p>Flash Sales for mobile Phones, Cloth and many more On going </p>
                </div>
                <div className="d-flex">
                    <div className="PostImg">
                    <img src = {PostImg2}  alt=""/>
                    </div>
                    <p>All New Clothing are out Go Shop for Your Best clothing </p>
                </div>

                <div className="d-flex">
                    <div className="PostImg">
                    <img src = {PostImg3}  alt=""/>
                    </div>
                    <p>Black Friday Season is AlmostHere so get Ready for a 50% sales </p>
                </div>
            </div>

            <div  className="BlogTags">
              <div>Online Selling</div>
              <div>Marketing Strategies</div>
              <div>Customer Experience</div>
              <div>Conversion Optimization</div>
              <div>Product Reviews</div>
              <div>Shipping and Logistics</div>
              <div>Payment Solutions</div>
              <div>Mobile Commerce</div>
              <div>Email Marketing</div>
              <div>Ecommerce Platforms</div>
              <div>Inventory Management</div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Blog;
