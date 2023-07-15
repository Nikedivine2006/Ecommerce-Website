import React from "react";
import './Navbar.css';
import {  Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Product from "../Body/product";
function Navbar1({prize, user}){
    
    return(
        <div >
            <div className="Navbar container d-flex">
               <div className="Logo">
               <h2>Best<span>Shop</span></h2>
               <p>24/hr Shopping with no limit</p>
               </div>

               <div className="Search">
                      <input type='search' placeholder="Search for Product here..."></input>
                      <button>Search</button>
               </div>
               <div className="Account">
               <Link to="User">
                <div className="User">
                <div className="UserIcon">
                <FontAwesomeIcon icon = {faUser} />
                </div>
                <div className="d-flex d-dflex">
                <span>{user}</span>
                <p>Login/Register</p>
                </div>
                </div>
                </Link>

                <div className="CartSystem">
                <div className="cartIcon">
                 <FontAwesomeIcon icon={faShoppingCart} />
                 </div> 
                 <Link to="cart">
                 <div className="cartInfo">
                    <p>Your Cart</p>
                    <span>{prize}$</span>
                 </div>
                 </Link>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Navbar1;


