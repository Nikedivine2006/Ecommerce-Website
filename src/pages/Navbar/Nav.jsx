import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faFacebook,  faInstagram, faGoogle, faAppStore, faTwitter} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
function Nav() {
    return(
        <div className="main-nav">
        <div className="nav container d-flex">
          <div className="navIcon">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faAppStore} />
          <FontAwesomeIcon icon={faTwitter} />
          </div>

          <div className="navSelect">
            <select>
                <option value="USD">USD</option>
                <option value="Euro">Euro</option>
                <option value="pound">Pound</option>
                <option value="peso">peso</option>
                <option value="Rupee">Rupee</option>
            </select>
  
           <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Hindi">Hindi</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
           </select>

          </div>
          </div>
        </div>
    )
}

export default Nav;