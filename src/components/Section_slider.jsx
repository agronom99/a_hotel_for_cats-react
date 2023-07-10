import React from "react";
import Fish from "../assets/img/fish.svg";
import Ellipse from "../assets/img/Ellipse12.svg";
import EllipseS from "../assets/img/Ellipse19S.svg";

import RawInv from "../assets/img/paw_inv.svg";
import GroupL from "../assets/img/Group17L.png";
import GroupR from "../assets/img/Group18R.png";



import Rectangle from "../assets/img/Rectangle20.jpg";

const SectionSlider = () => {
  return (
    <div className="roundabout">
      <div className="slider">
        <img className="fish" src={Fish} alt="Fish" />
        <h2>Номера</h2>
        <img className="kot" src={Rectangle} alt="Rectangle" />
        <div className="buttons">
          <div className="marker">
            <img src={Ellipse} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
          </div>
          <div className="groupLR">
            <img src={GroupL} alt="GroupL" />
            <img src={GroupR} alt="GroupR" />
          </div>
        </div>
        <div className="ul">
          <ul className="ul-li">
            <li>
              <h3> Економ плюс</h3>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 0,90 м2</li>
                <li>Розміри (ШхГхВ) — 90х100х180 см</li>
                <li>Ціна на день: 20$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
      
      </div>
      <div className="slider">
        <img className="fish" src={Fish} alt="" />
        <h2>Номера</h2>
        <img className="kot" src={Rectangle} alt="" />
        <div className="buttons">
          <div className="marker">
            <img src={Ellipse} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
          </div>
          <div className="groupLR">
            <img src={GroupL} alt="GroupL" />
            <img src={GroupR} alt="GroupR" />
          </div>
        </div>
        <div className="ul">
          <ul className="ul-li">
            <li>
              <h3> Економ плюс</h3>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 0,90 м2</li>
                <li>Розміри (ШхГхВ) — 90х100х180 см</li>
                <li>Ціна на день: 20$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
      
      </div>
      <div className="slider">
        <img className="fish" src={Fish} alt="" />
        <h2>Номера</h2>
        <img className="kot" src={Rectangle} alt="" />
        <div className="buttons">
          <div className="marker">
            <img src={Ellipse} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
            <img src={EllipseS} alt="Ellipse" />
          </div>
          <div className="groupLR">
            <img src={GroupL} alt="GroupL" />
            <img src={GroupR} alt="GroupR" />
          </div>
        </div>
        <div className="ul">
          <ul className="ul-li">
            <li>
              <h3> Економ плюс</h3>
            </li>
            <li>
              <ul style={{ listStyleImage: `url(${Ellipse})` }}>
                <li>Площа - 0,90 м2</li>
                <li>Розміри (ШхГхВ) — 90х100х180 см</li>
                <li>Ціна на день: 20$</li>
              </ul>
            </li>
            <li>
              <button>
                <p>Бронювання</p>
                <img src={RawInv} alt="pawInv" />
              </button>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default SectionSlider;
