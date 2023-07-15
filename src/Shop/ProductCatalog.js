import React from "react";
import "./ProductCatalog.css";
import Img from "./Image/vr.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faRefresh } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from "react-router-dom";

function ProductCatalog({catalog}) {

  return (
    <div className="Main-Catalog">
      <div className="container">
        <div className="Catalog-img">
          <div className="img">
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="catalog-description">
          <h3>{catalog.name}</h3>
          <div className="catalog-icon">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span>(1 Customer review)</span>
          </div>

          <div className="catalog-prize">
            <h4>${catalog.price}</h4>
          </div>

          <div className="Main-description">
            <p>{catalog.description}</p>
          </div>

          <button>Add to Cart</button>

          <ul className="wishList">
            <li>
              <FontAwesomeIcon icon={faHeart} />
              <span>Add to WishList</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faRefresh} />
              <span>Add to Compare</span>
            </li>
          </ul>

          <h5>Categories: {catalog.category}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
