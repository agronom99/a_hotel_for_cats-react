import Header from './components/Header';
import SectionHome from './components/Section__home';
import SectionConditions from './components/Section_conditions';
import SectionSlider from './components/Section_slider';
import './styles/App.scss';
 


function App() {
  return (
    <>
    <Header />
    <SectionHome/>
    <SectionConditions/>
    <SectionSlider/>
    </>
  );
}

export default App;
