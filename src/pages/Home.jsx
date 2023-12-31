import React from "react";
import UncontrolledExample from "../components/Carousel";
import UncontrolledExampleReviews from "../components/CarouselReviews";
import SectionHome from "../components/Section__home";
import SectionConditions from "../components/Section_conditions";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <SectionHome />
      <div className="sprite-container">
        <div className="sprite-image"></div>
      </div>
      <SectionConditions />
      <UncontrolledExample />
      <UncontrolledExampleReviews />
    </div>
  );
};

export default Home;
