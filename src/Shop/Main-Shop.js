import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar/Main-Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faThLarge,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faStar, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import "./Shop.css";
import { Link } from "react-router-dom";

function Shop({ cartItems, setCartItems, totalPrize }) {
  const [ProductData, setProductData] = useState([]);

  //   fetch Product Information

  useEffect(() => {
    let Toast = document.getElementById("toast");
    const fetchData = () => {
      fetch("/shopData.json")
        .then((response) => response.json())
        .then((data) => {
          setProductData(data);
          // console.log(data);
        })
        .catch((error) => {
          console.error(error, "No product found");
        });
    };

    fetchData();

    setTimeout(() => {
      Toast.style.visibility = "hidden";
    }, 10000);
  }, []);

  //   Add item to cart
  const addToCart = (item) => {
    setCartItems((cartItem) => [...cartItem, item]);
    Toast.style.visibility = "visible";
    totalPrize((prevPrize) => prevPrize + item.productPrice);

    //   check if Item Have Been Added to cart
    const IsItemICart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (IsItemICart) {
      alert("Item Already in cart");
      return;
    }
  };

  let Toast = document.getElementById("toast");

  // Funtion to navigate to the ProducCatalog page

  // const toProductCatalog = (ProductItem) => {
  //   SetProductCatalog(ProductItem);
  //   console.log(ProductItem);
  // }

  return (
    <div className="Main-Shop">
      <Navbar />
      <div className="container">
        <div className="Shop-Navbar">
          <h1>
            Shop <span>Best</span>Shop In Nigeria
          </h1>
        </div>
        <div className="Shop-Product">
          <nav>
            <div>
              <h3>{ProductData.length} product found!</h3>
            </div>
            <div>
              <FontAwesomeIcon icon={faTasks} id="Shop-Icons" />
              <FontAwesomeIcon icon={faThLarge} id="Shop-Icons1" />
            </div>
          </nav>
          <div className="d-flex">
            {ProductData.map((item) => (
              <div key={item.id} className="Product">
                <Link to={`/ProductCatalog/${item.id}`}>
                  <div className="ProductImg">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="ProductDescription">
                    <div>
                      <p>{item.Catergories}</p>
                      <h3>{item.productName}</h3>
                    </div>
                    <div className="RatingSection">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>

                  <div className="ProductPrice">
                    <h4>${item.productPrice}</h4>
                  </div>
                </Link>

                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="notification-toast" id="toast">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Item Added to Cart
          <Link to="/cart">
            <span>{cartItems.length}</span>
            <FontAwesomeIcon icon={faShoppingCart} className="icon1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
