import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// підключаємо redux:
import {store} from "./redux/store"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
  {/* React.StrictMode - убирати щоб небуло подвійної перерисовки */}
  {/* <React.StrictMode> */}
  <Provider store={store}>
    <App />
    </Provider>
  {/* </React.StrictMode> */}
  </BrowserRouter>
);
