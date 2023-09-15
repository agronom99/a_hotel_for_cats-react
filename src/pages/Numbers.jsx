import React from "react";
import Button from "react-bootstrap/Button";
import CartNumbers from "../components/CartNumbers/index";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, 
  setCurrentPage
 } from "../redux/slices/filterSlice";
import equipmentText from "../assets/equipmentText.json";
import Sort from "../components/ButtonSelection";
import { current } from "@reduxjs/toolkit";
import FiltrPrice from "../components/FiltrPrice";
import FiltrArea from "../components/FiltrArea";
import FiltrEquipment from "../components/FiltrEquipment";
import SectionPromotion from "../components/Section__promotion";
import { Link } from "react-router-dom";

function Numbers() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
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

  // кнопка скинути фільтр
  const removeFilter = (n) => {
    console.log("привіт", n);
  };
  // ----------------------------
 

  return (
    <>
    <div className="cart-numbers">
      <div className="numbers-title">
        <div>
          <h1>Наші номера</h1>
          <div className="filter">
            <FiltrPrice />
            <p style={{ marginTop: "40px" }}>Площа:</p>
            {items.map((obj) => (
              <FiltrArea key={obj.id} area={obj.area} />
            ))}
            <p style={{ marginTop: "40px" }}>Оснащеня номера:</p>
            
              <FiltrEquipment />
          
            <Button
              onClick={() => removeFilter(111)}
              variant="outline-warning"
              style={{
                width: "185px",
                color: "black",
                borderRadius: "25px",
                marginTop: "42px",
              }}
            >
              Скинути фільтр
            </Button>{" "}
            {/* <Button onClick={()=> console.log("plus")}
              variant="outline-warning"
              style={{
                width: "185px",
                color: "black",
                borderRadius: "25px",
                marginTop: "42px",
              }}
            >
              Скинути фільтр
            </Button>{" "} */}
          </div>
        </div>
      </div>
      <div>
        <Sort />
        <div style={{ display: "flex", flexWrap: "wrap" }} >
          {items.map((obj) => (
            <Link key={obj.id} to={`/home/numbers/fullNumbers/${obj.id}`} style={{textDecoration:"none"}}>
            <CartNumbers
              key={obj.id}
              title={obj.title}
              img={obj.imageUrl}
              sizes={obj.sizes}
              area={obj.area}
              equipment={obj.equipment}
              price={obj.price}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
    <SectionPromotion/>
    </>
    
  );
}

export default Numbers;
