import React from "react";
import CartNumbers from "../components/CartNumbers/index";
import numbers from "../assets/numbers.json";

const Numbers = () => {
  return (
    <div className="cart-numbers">
      {numbers.map((obj) => (
         <CartNumbers key={obj.id}
         title={obj.title} img={obj.imageUrl} sizes={obj.sizes} area={obj.area} 
         equipment={obj.equipment} 
         price={obj.price}  
          /> 
          ))}
      
    </div>
  );
};

export default Numbers;
