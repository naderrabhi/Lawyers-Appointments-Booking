import React from "react";
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
import ContactForm from "../ContactForm/ContactForm";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding" id="contact">
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
          <p>Appelez-nous maintenant pour une consultation</p>
        </div>
      </div>
      <ContactForm />
      <div className="footer--body">
        <div className="footer--body_row">
          <div className="footer--body_col">
            <FaLocationArrow />
            <h3 className="p__opensans">Notre bureau</h3>
            <p className="p__opensans">123 Street, Gafsa</p>
          </div>
          <div className="footer--body_col">
            <FaMailBulk />
            <h3 className="p__opensans">Email</h3>
            <p className="p__opensans">justice@gmail.com</p>
          </div>
          <div className="footer--body_col">
            <FaPhoneAlt />
            <h3 className="p__opensans">Appelez-nous</h3>
            <p className="p__opensans">(+000) 123 456 789</p>
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
        <p className="p__opensans">© Your Site Name. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
