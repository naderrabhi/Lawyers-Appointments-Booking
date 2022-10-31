import React from "react";
import "./about.css";
import about from "../../assets/image/about.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container about--content">
        <div className="row about--row">
          <div className="col col-md-12 col-lg-6 col-sm-12 about--col">
            <img src={about} alt="" />
          </div>
          <div className="col col-md-12 col-lg-6 col-sm-12 about--col about--col_content">
            <h3>About us</h3>
            <p>We Provide Highly Reliable & Effective Legal Solutions</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              non, reprehenderit accusantium voluptatem dicta nobis similique
              rerum aperiam laboriosam, maiores iusto delectus est. Labore
              sapiente corrupti veniam earum consequatur fugit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
