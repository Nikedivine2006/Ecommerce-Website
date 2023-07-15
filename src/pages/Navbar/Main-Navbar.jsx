import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="NavLink">
        <div className="container">
          <ul className="con">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about-Us">About-Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact-Us</Link>
            </li>
          </ul>
          <ul>
            <li className="active">Special Offer</li>
           <li>Purchase History</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
