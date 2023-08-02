import React from "react";

const FiltrPrice = () => {
  return (
    <div className="filtr_price">
      <p>Вартість за добу, $:</p>
      <div >
        <input type="text" placeholder="від: 10"  />
        <input type="text" placeholder="до: 60"/>
      </div>
    </div>
  );
};

export default FiltrPrice;
