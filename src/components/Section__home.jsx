import React from "react";
import Raw from "../assets/img/paw.svg";
import { Link } from "react-router-dom";

const Section__home = () => {
  return (
    <div href="numbers" className="main" >
      <h3>Вінниця</h3>
      <h1>Котейка</h1>
      <h2>Затишний готель для котів та кішок</h2>
      <Link to="numbers" style={{textDecoration:"none"}}>
      <button  className="main-button">
        <p style={{margin:"1px 0 0 15px"}}>Номера</p>
        <img src={Raw} alt="paw" />
      </button>
      </Link>
    </div>
  );
};

export default Section__home;
