import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import Raw from "../assets/img/paw.svg";
import PawB from "../assets/img/pawB.svg";
import Vector14 from "../assets/img/Vector 14.svg";


function Booking() {
 
  return (
    <>
      <ul className="booking">
        <li>
          <img className="paw-b" src={PawB} alt="PawB" />
        </li>
        <li>
          <img className="vector-14" src={Vector14} alt="Vector14" />
        </li>
        <li>
          <h1>Забронювати номер</h1>
        </li>
        
        <li>
          <input type="text" placeholder="Ваше ім'я"  />
        </li>
        <li>
          <input type="text" placeholder="Ім'я твого улюбленця" />
        </li>
        <li>
          <input type="text" placeholder="Телефон" />
        </li>
        <li>
          <input type="text" placeholder="E-mail" />
        </li>
        <li className="booking-li">
          <p>Дата заїзду з:</p>
          <input type="date" />
          <p>до</p>
          <input type="date" />
        </li>
        <li>
          <Link to="/popap" style={{ textDecoration: "none" }}>
            <button className="main-button-booking">
              <p className="p-promotion">Відправити запит</p>
              <img src={Raw} alt="paw" />
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Booking;
