import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentSystem.css';
import {Link } from 'react-router-dom'



function PaymentSystem({prize, cartItems, setCartItems, totalPrize}) {
  
   const  CheckoutNow = () => {
    
     alert(`payment Received of $${prize}`)
     setCartItems([])
     totalPrize(0)
    
}
    return(
        <div className='Main-History'>
           <div className='Col container'>
               <div>
                <span>Total Amount For This Week</span>
                <h2>$3000</h2>
               </div>
               <div>
                <span>Total Amount for This To Day</span>
                <h2>${prize}</h2>
               </div>
               <div>
                <span>Discount Rate</span>
                <h2>No Discount Rate</h2>
               </div>
           </div>

           <div className='container History'>
             <nav>
                <h3>Product Payment</h3>
             </nav>

             <div className='ProductOverview'>
                <div className='Overview-Form'>
                <div>
                    <label>Your Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Card Number</label>
                    <input type="Number"/>
                </div>
              
                <div className='d-flex'>
                    <div>
                        <label>Expired date</label>
                        <input type="date" />
                    </div>

                    <div>
                    <label>Your Cvv</label>
                    <input type="Number"/>
                    </div>
                </div>

                <div>
                    <Link to="/shop"><button onClick={CheckoutNow}>Check Out</button></Link>
                </div>
             </div>

             <div className='Cart_Information'>
                 <nav>
                    <h3>Your order</h3>
                 </nav>
                {cartItems.map((item, index) => (
                 <div key={index} className='Cart_product'>
                    <div className='img'>
                        <img src={item.image} alt=""/>
                        <p>{item.productName}</p>
                    </div>

                    <div className='Product_name'>
                         <span>${item.productPrice}</span>
                    </div>
                 </div>
                ))}
                 
             </div>

             
           </div>
        </div>
        </div>
    )
}

export default PaymentSystem;