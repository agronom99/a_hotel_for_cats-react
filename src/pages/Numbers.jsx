import React from "react";
import CartNumbers from "../components/CartNumbers/index";
// import numbers from "../assets/numbers.json";
import Sort from "../components/ButtonSelection";

function Numbers() {
  const [sortType, setSortType] = React.useState({
    name: "площі",
    sortProperty: "area",
  });

  // Визиває об'єкти з бекенда (Мокапі)
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://6436f7ad8205915d34018d30.mockapi.io/items
      `,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, [sortType]);
  // ------------------------------------------
  return (
    <div className="cart-numbers">
      <div className="numbers-title">
        <div>
          <h1>Наші номера</h1>
          <div className="filter">filtr</div>
        </div>
      </div>
      <div>
        <Sort value={sortType} onClickSort={(i) => setSortType} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((obj) => (
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
