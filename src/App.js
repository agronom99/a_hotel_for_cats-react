// import UncontrolledExample from "./components/Carousel";
// 
// import UncontrolledExampleReviews from "./components/CarouselReviews";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import ColorSchemesExample from "./components/Header2";
import KitchenSinkExample from "./components/MapAddress";
import Numbers from "./pages/Numbers";

// import SectionHome from "./components/Section__home";
// import SectionConditions from "./components/Section_conditions";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <ColorSchemesExample />
      {/* <SectionHome /> */}
      {/* <SectionConditions /> */}
      {/* <UncontrolledExample /> */}
      {/* <UncontrolledExampleReviews /> */}
      <Numbers/>
      <KitchenSinkExample />
      <ColorSchemesExample />
      <Footer />
    </div>
  );
}

export default App;
