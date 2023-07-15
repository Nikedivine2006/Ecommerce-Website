// import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "./User.css";
import { Link } from 'react-router-dom'
function User({ setUser }) {

    

  

  const UserInfo = (event) => {
    setUser(event.target.value)
  };

  return (
    <div className="container Main_form">
      <div className="User_background">SIGN UP</div>
      <div className="User_form">
        <nav>
          <h2>
            Welcome To <span>Best</span>Shop
          </h2>
          <p>Resigter Your account</p>
        </nav>

        <div className="form">
          <div>
            <label>Full-Name</label>
            <input
              type="text"
              placeholder="Chukwuuemeka divine"
              onChange={UserInfo}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="nikedivine36@gmail.com"
              required
            />
          </div>

          <div>
            <label>promo code</label>
            <input type="text" placeholder="1234567" />
          </div>

          <div>
            <Link to="/"><button>Sign In</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
