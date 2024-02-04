import React from "react";
import UncontrolledExample from "../components/Carousel";
import UncontrolledExampleReviews from "../components/CarouselReviews";
import SectionHome from "../components/Section__home";
import SectionConditions from "../components/Section_conditions";

const Home = () => {
  // Отримати шлях без повного URL
  const path = window.location.pathname;

  let section;

  switch (true) {
    case path.includes("why"):
      section = <SectionConditions />;
      break;
    case path.includes("number"):
      section = <UncontrolledExample />;
      break;
    case path.includes("reviews"):
      section = <UncontrolledExampleReviews />;
      break;
    case path.includes("find"):
      section = <SectionHome />;
      break;
    default:
      section = (
        <>
          <SectionHome />
          <SectionConditions />
          <UncontrolledExample />
          <UncontrolledExampleReviews />
        </>
      );
  }

  return <div>{section}</div>;
};

export default Home;
