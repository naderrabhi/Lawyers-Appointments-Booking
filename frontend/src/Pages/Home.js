import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Practice from "../Components/Practice/Practice";
import Violance from "../Components/Violance/Violance";
import Welcome from "../Components/Welcome/Welcome";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Violance />
        </Carousel.Item>
        <Carousel.Item>
          <Welcome />
        </Carousel.Item>
      </Carousel>
      <About />
      <Practice />
      <Footer />
    </>
  );
};

export default Home;
