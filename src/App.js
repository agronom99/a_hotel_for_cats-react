import UncontrolledExample from './components/Carousel';
import UncontrolledExampleReviews from './components/CarouselReviews';
import Header from './components/Header';
import SectionHome from './components/Section__home';
import SectionConditions from './components/Section_conditions';
import './styles/App.scss';


function App() {
  return (
    
    <>
   
    <Header />
    <SectionHome/>
    <SectionConditions/>
    <UncontrolledExample/>
    <UncontrolledExampleReviews/>
    </>
  );
}

export default App;
