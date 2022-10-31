import React from "react";
import "./footer.css";
import gavel from "../../assets/image/gavel.jpg";
import {
  FaLocationArrow,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div
          className="row footer--header"
          style={{
            backgroundImage: `url(${gavel})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.94,
          }}
        >
          <p>Let's get started. Call us now for a Consultation</p>
        </div>
      </div>
      <div className="row footer--body">
        <div className="row footer--body_row">
          <div className="col col-md-12 col-lg-4 col-sm-12 footer--body_col">
            <FaLocationArrow />
            <h3>Our office</h3>
            <p>123 Street, Gafsa, Tunisia</p>
          </div>
          <div className="col col-md-12 col-lg-4 col-sm-12 footer--body_col">
            <FaMailBulk />
            <h3>Email Us</h3>
            <p>justice@gmail.com</p>
          </div>
          <div className="col col-md-12 col-lg-4 col-sm-12 footer--body_col">
            <FaPhoneAlt />
            <h3>Call Us</h3>
            <p>(+000) 123 456 789</p>
          </div>
        </div>
        <div className="footer--icons">
            <a href="facebook">
              <FaFacebookSquare />
            </a>
            <a href="twitter">
              <FaTwitter />
            </a>
            <a href="linkedin">
              <FaLinkedin />
            </a>
            <a href="instagram">
              <FaInstagramSquare />
            </a>
          </div>
      </div>
      <div className="footer--copyright">
        <p>© Your Site Name. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
