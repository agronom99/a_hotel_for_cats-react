import React from "react";
import CartNumbers from "../components/CartNumbers/index";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
// import numbers from "../assets/numbers.json";
import Sort from "../components/ButtonSelection";
import { current } from "@reduxjs/toolkit";

function Numbers() {
  const dispatch = useDispatch();
  const {categoryId, sort} = useSelector((state) => state.filter);
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  // Визиває об'єкти з бекенда (Мокапі)
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    // const search = serchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://6436f7ad8205915d34018d30.mockapi.io/items?page=${currentPage}&sortBy=${sortBy}&order=${order}
      `
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
    window.scrollTo(0, 0);
  }, [sort.sortProperty]);
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
        <Sort />
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
