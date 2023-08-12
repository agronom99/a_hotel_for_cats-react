import React from "react";
import Footer from "./components/Footer";
import KitchenSinkExample from "./components/MapAddress";
import Numbers from "./pages/Numbers";

import "./styles/App.scss";
import Home from "./pages/Home";
import NotFoundBlock from "./components/NotFoundBlock";
import { Routes, Route } from "react-router-dom";
import ColorSchemesExample2 from "./components/Header2";
import FullNumbers from "./pages/FullNumbers";
// import Grid from "./pages/Grid";
export const SearchContext = React.createContext();

function App() {
  return (
    <div>
      <SearchContext.Provider value={{}}>
        <ColorSchemesExample2 />
        <Routes>
          {/* <Route path="/grid" element={<Grid />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a_hotel_for_cats-react" element={<Home />} />
          <Route path="/numbers#why" element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/a_hotel_for_cats-react/numbers" element={<Numbers />} />
          <Route path="/home/numbers" element={<Numbers />} />
          <Route path="/home/numbers/fullNumbers/:id" element={<FullNumbers/>} />

          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
        {/* <SectionPromotion/> */}
        <KitchenSinkExample />
        <ColorSchemesExample2 />
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
