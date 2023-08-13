import React from 'react'
import { Link } from "react-router-dom";
import Raw from "../assets/img/paw.svg";
import PawP from "../assets/img/pawP.svg";
import Vector14 from "../assets/img/Vector 14.svg";


const Popap = () => {
  return (
    <>
    <div className="popap">
          <img className="vector-14" src={Vector14} alt="Vector14" />
          <h1>Дякуємо за замовлення!</h1>
          <p>Ми незабаром зв’яжемось з вами</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="main-button-popap">
              <p className="p-promotion">OK!<br/>(перехід на головну сторінку)</p>
              <img src={Raw} alt="paw" />
            </button>
          </Link>
          <img className="paw-p" src={PawP} alt="PawP" />
        
      </div>
    </>
  )
}

export default Popap