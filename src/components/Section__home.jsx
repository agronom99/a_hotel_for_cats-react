import React from "react";
import Raw from "../assets/img/paw.svg";
import Grup51 from "../assets/img/Group51.jpg";



const Section__home = () => {
  return (
    <div className="main" style={{ backgroundImage: `url(${Grup51})` }}>
      <h3>Вінниця</h3>
      <h1>Котейка</h1>
      <h2>Затишний готель для котів та кішок</h2>
      <button className="main-button">
        <p style={{margin:"1px 0 0 15px"}}>Бронювання</p>
        <img src={Raw} alt="paw" />
      </button>
    </div>
  );
};

export default Section__home;
