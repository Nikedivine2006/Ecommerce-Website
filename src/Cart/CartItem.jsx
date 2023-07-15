import React from "react";
// import ProductData from '../Shop-context/shopData.json';

export const CartElementList = (props) => {
 const [productName, productPrice, discountedPrice] = props.data;
    return (
        <div>
            <h1>Cart</h1>
            <div>
            {/* <img src = {ItemList.image} ait=""/> */}
            <h3>{productName}</h3>
              <span>${discountedPrice}</span>
              <p>${productPrice}</p>
              </div>
        </div>
    )
}

export default CartElementList;