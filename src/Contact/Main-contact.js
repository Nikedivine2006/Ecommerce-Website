import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../pages/Navbar/Main-Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faClock,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  const SendMessageFrom = () => {
    setTimeout(() => {
      let Sent = document.getElementById("sent");
      let SendMessage = document.getElementById("Message-box");

      if (Message.name === " ") {
        alert("State Your Name");
        return (Sent.innerHTML = "Waiting....");
      } else if (Message.Email === " ") {
        alert("Input Your Email");
        return (Sent.innerHTML = "Waiting....");
      } else if (Message.Message === " ") {
        alert("Input Your Message");
        return (Sent.innerHTML = "Waiting....");
      } else {
        alert("sent....");
        Sent.innerHTML = "Sending...";
        SendMessage.style.display = "none";
      }
    }, 3000);

    let Sent = document.getElementById("sent");
    Sent.style.display = "block";

    let Input = document.getElementsByTagName("input");
    Input.value = " ";
    console.log(Input);
  };

  const [Message, setMessage] = useState(
    {
      name: " ",
      Email: " ",
      Message: " ",
    },
    4000
  );

  const HandleMessage = (event) => {
    setMessage({ ...Message, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="Contact-Banner container">
        <div className="banner-1">
          <div className="d-flex">
            <span></span>
            <h1>Contact Us</h1>
          </div>
          <p>
            Contact our Company If any Emergency all Could Always send Us a
            message All Company is located at the red in thSEe map.
          </p>
          <button>SEND A MESSAGE</button>
        </div>
        <div className="banner-2">
          <h2>Contact Us</h2>
          <div className="Contact-Icon">
            <div className="d-flex">
              <FontAwesomeIcon icon={faLocationPin} className="icon" />
              <div>
                <p>Our Office</p>
                <span>Find us at our nearest location</span>
              </div>
            </div>

            <div className="d-flex">
              <FontAwesomeIcon icon={faClock} className="icon" />
              <div>
                <p>Open Office hours</p>
                <span>Mon-Fri 6:0 Am - 7:0 Am </span>
              </div>
            </div>

            <div className="d-flex">
              <FontAwesomeIcon icon={faMessage} className="icon" />
              <div>
                <p>Get in Touch</p>
                <span>You can Always chat Us Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Call-log container">
        <div>
          <h2>Calls: (+234) 816-915-3087</h2>
          <p>We Can't wait to make your Dreams a Reality</p>
        </div>

        <div>
          <button>
            Online Calls <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          </button>
        </div>
      </div>

      <div className="Contact-Form container">
        <div className="Form">
          <h1>Get In Touch</h1>
          <form action="">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              onChange={HandleMessage}
              value={Message.name}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder=""
              name="Email"
              value={Message.Email}
              onChange={HandleMessage}
            />
            <label>Send Messages:</label>
            <input
              type="text"
              placeholder="Send Messages"
              name="Message"
              className="Message-input"
              autoComplete="off"
              value={Message.Message}
              onChange={HandleMessage}
            />
          </form>
        </div>

        <div className="Message-box" id="Message-box">
          <div>Name: {Message.name}</div>
          <div>Emali: {Message.Email}</div>
          <div className="Message-input">Send Message: {Message.Message}</div>
          <button onClick={SendMessageFrom}>
            Send <FontAwesomeIcon icon={faTelegramPlane} className="icon" />
          </button>
          <h3 id="sent">Sending.....</h3>
        </div>
      </div>

      <div className="Contact-Map"></div>
    </div>
  );
}

export default Contact;
