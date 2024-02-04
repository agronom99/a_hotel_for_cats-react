import React from "react";
import UncontrolledExample from "../components/Carousel";
import UncontrolledExampleReviews from "../components/CarouselReviews";
import SectionHome from "../components/Section__home";
import SectionConditions from "../components/Section_conditions";

const Home = () => {

  const section =
    window.location.pathname === "/a_hotel_for_cats-react/why" ? (
      <SectionConditions />
    ) : window.location.pathname === "/a_hotel_for_cats-react/number" ? (
      <UncontrolledExample />
    ) : window.location.pathname === "/a_hotel_for_cats-react/reviews" ? (
      <UncontrolledExampleReviews />
    ) : window.location.pathname === "/a_hotel_for_cats-react/find" ? (
      <SectionHome />
    ) : (
      <>
        <SectionHome />
        <SectionConditions />
        <UncontrolledExample />
        <UncontrolledExampleReviews />
      </>
    );

  return (
    <div>
      {section }
    </div>
  );
};

export default Home;
