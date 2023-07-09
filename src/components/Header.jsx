import React from "react";
import Logo_Group_50 from "../assets/img/Logo_Group_50.svg";
import Logo_kot from "../assets/img/KOTEYKA.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-1" src={Logo_Group_50} alt="logo" />
        <img className="logo-2" src={Logo_kot} alt="logo_kot" />
      </div>
      <ul className="menu-header">
        <li>Чому ми?</li>
        <li>Номера</li>
        <li>Відгуки</li>
        <li>Як нас знайти</li>
      </ul>
    </div>
  );
};

export default Header;
