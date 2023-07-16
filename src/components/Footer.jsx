import React from "react";
import C from "../assets/img/C.svg";


const Footer = () => {
  return (
    <div className="footer-map" style={{height:"49px" ,display:'flex', justifyContent:"space-around", alignItems:"center",fontSize:"12px", fontFamily:'lato', color:"#8F8F8F", boxShadow:"1px 1px 3px 3px rgb(175,167,167)", borderRadius:"10px" , marginBottom:"50px"  }}>
      <p style={{marginBottom:"0"}}>
        <img src={C} alt="C" style={{width:"9px", margin:"0 5px 2px 0" }} />
        2023 Всі права захищені
      </p>
      <p style={{marginBottom:"0"}}>Політика конфіденційності</p>
    </div>
  );
};

export default Footer;
