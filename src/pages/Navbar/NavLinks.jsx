import React, {useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/main-Blog';
import Collection from '../../Collection/Main-collection';
import Shop from '../../Shop/Main-Shop';
import Contact from '../../Contact/Main-contact';
import About from '../../About/Main-about';
import Layout from '../Layout';
import Cart from '../../Cart/Cart';
import Navbar1 from './Navbar';
import Nav from './Nav';
import ProductCatalog from '../../Shop/ProductCatalog';
import PaymentSystem from '../../Payment system/PaymentSystem';
import User from '../../UserLogin/User';
import Footer from '../../footer/Footer';

const Navlink = () => {
  const [cartItems, setCartItems] = useState([])
  const [prize, totalPrize] = useState(0)
  const [user, setUser] = useState('Hello User')


   // Funtion to remove item from a Cart Page

   const RemoveCartItem = (item) => {
     const UpDateCartItem = cartItems.filter((cartItem) => { return cartItem.id !== item.id});
     setCartItems(UpDateCartItem);
    totalPrize((prevPrize) => prevPrize - item.productPrice)
   }


    return (
      <div>
        <div>
          <BrowserRouter>
            <Nav />
            <Navbar1 prize={prize} user={user}/>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/shop" element={<Shop setCartItems={setCartItems}  cartItems={cartItems} totalPrize={totalPrize}/>}  />
              <Route path="/about-Us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} RemoveCartItem={RemoveCartItem} prize={prize} setCartItems={setCartItems} totalPrize={totalPrize}/>} />
              <Route path='/ProductCatalog/:productId' element={<ProductCatalog />} />
              <Route path='/Payment System' element={<PaymentSystem prize={prize}  cartItems={cartItems} setCartItems={setCartItems} totalPrize={totalPrize} />} />
              <Route path='/User' element={<User setUser={setUser} user={user}/>} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    );
  }


export default Navlink;
