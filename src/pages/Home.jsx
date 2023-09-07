import React from "react";
import UncontrolledExample from "../components/Carousel";
import UncontrolledExampleReviews from "../components/CarouselReviews";
import SectionHome from "../components/Section__home";
import SectionConditions from "../components/Section_conditions";

const Home = () => {
  return (
    <div>
      <div class="sprite-container">
        <div class="sprite-image"></div>
      </div>
      <SectionHome />
      <SectionConditions />
      <UncontrolledExample />
      <UncontrolledExampleReviews />
    </div>
  );
};

export default Home;
