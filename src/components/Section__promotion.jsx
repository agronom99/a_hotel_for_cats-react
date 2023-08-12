import React from "react";
import Raw from "../assets/img/paw.svg";
import { Link } from "react-router-dom";
import rawPromotion from "../assets/img/paw-promotion.svg";

const SectionPromotion = () => {
  return (
    <div  className="main-promotion">
      <img src={rawPromotion} alt="raw" />
      <div className="promotion-text">
      <h3>Кожний 7-й день</h3>
      <h1>безкоштовно!</h1>
      <h2>
        Акція діє при розміщенні: <br />У кімнатах "Lux" та "Super-Lux”{" "}
      </h2>
      <Link to="numbers" style={{textDecoration:"none"}}>
        <button className="main-button-promotion">
          <p className="p-promotion">Забронювати</p>
          <img src={Raw} alt="paw" />
        </button>
      </Link>
      </div>
    </div>
  );
};

export default SectionPromotion;
