import React from "react";
import Footer from "./components/Footer";
import KitchenSinkExample from "./components/MapAddress";
import Numbers from "./pages/Numbers";

import "./styles/App.scss";
import Home from "./pages/Home";
import NotFoundBlock from "./components/NotFoundBlock";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FullNumbers from "./pages/FullNumbers";
import Booking from "./pages/Booking.jsx";
import Popap from "./pages/Popap";
import ContactForm from "./components/ContactForm";
import { Notifications } from '@mantine/notifications';


export const SearchContext = React.createContext();

function App() {
  window.scrollTo(0, 0);
  return (
    <div>
     

      <SearchContext.Provider value={{}}>
        <Header />
        <Notifications />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a_hotel_for_cats-react" element={<Home />} />
          <Route path="/numbers#why" element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/a_hotel_for_cats-react/numbers" element={<Numbers />} />
          <Route path="/home/numbers" element={<Numbers />} />
          <Route path="/home/numbers/fullNumbers/:id" element={<FullNumbers/>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/popap" element={<Popap />} />
          <Route path="/contactform" element={<ContactForm/>} />

          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
       

        <KitchenSinkExample />
        <Header />
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
