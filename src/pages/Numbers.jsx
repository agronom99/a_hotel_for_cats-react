import React from "react";
import CartNumbers from "../components/CartNumbers/index";
import numbers from "../assets/numbers.json";
import Sort from "../components/ButtonSelection";

function Numbers() {
  return (
    <div className="cart-numbers">
      <div className="numbers-title">
        <div>
          <h1>Наші номера</h1>
          <div className="filter">filtr</div>
        </div>
      </div>
      <div>
        <Sort/>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          {numbers.map((obj) => (
            <CartNumbers
              key={obj.id}
              title={obj.title}
              img={obj.imageUrl}
              sizes={obj.sizes}
              area={obj.area}
              equipment={obj.equipment}
              price={obj.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Numbers;
