import React from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal } from 'bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
function Cart({ setCartItems, cartItems, RemoveCartItem, prize, totalPrize }) {
  return (
    <div className="Cart-Section">
      <div className="d-flex container">
        <div className="Main-Cart">
          <div className="Nav-header">
            <h1>Shopping Cart</h1>
            <h3>{cartItems.length} items</h3>
          </div>
          <div className="Cart-Items">
            {cartItems.map((item, index) => (
              <div key={index} className="item">
                {/* <div className='item'> */}
                <div className="ItemImg">
                  <img src={item.image} alt="" />
                  {/* <img src={Img1} alt=''/> */}
                </div>

                <div className="ItemDescription">
                  <h3>{item.productName}</h3>
                </div>

                <div className="ItemPrice">
                  {" "}
                  <p> ${item.productPrice}</p>
                </div>

                <div
                  className="ItemRemove"
                  onClick={() => {
                    RemoveCartItem(item);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} className="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Checkout-Cart">
          <div className="Checkout-Nav">
            <h2>Order Summary</h2>
            <p>
              Total: <span>${prize}</span>
            </p>
          </div>

          <div className="Checkout-Input">
            <label>Promo Code</label>
            <input type="text" />
            <button>Apply</button>
          </div>

          <div className="Checkout-button">
            <nav>
              <p>Total Cost</p>
              <span>${prize}</span>
            </nav>
            <Link to="/Payment System">
              <button>Go To CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
