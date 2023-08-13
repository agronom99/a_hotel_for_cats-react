import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


import Raw from "../assets/img/paw.svg";
import PawN from "../assets/img/pawN.svg";

import UncontrolledExample from "../components/Carousel";

function FullNumbers() {
  // const [items, setItems] = React.useState([]);

  const [num, setNumbers] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchNumbers() {
      try {
        const { data } = await axios.get(
          "https://6436f7ad8205915d34018d30.mockapi.io/items/" + id
        );
        setNumbers(data);
      } catch (error) {
        alert("Похибка отримання данних!");
      }
    }

    fetchNumbers();
  }, [id]);

  if (!num) {
    return "Загрузка ...";
  }
  window.scrollTo(0, 0);
  return (
    <>
      <div className="full-numbers">
        <img className="paw-n" src={PawN} alt="PawC"></img>
        <div className="img-text">
          <img src={num.imageUrl} alt="img" />
          <div className="img-text-text">
            <h1>{num.title}</h1>
            <ul>
              <li>Розміри - ({num.sizes}) см</li>
              <li>Площа - {num.area} м2</li>
              <li>
                Оснащення кімнати:
                {num.equipment.map((el) => (
                  <div key={el}>
                    <img
                      src={el}
                      alt="cat"
                      style={{ height: "18px", width: "18px" }}
                    />
                  </div>
                ))}
              </li>
              <li>Ціна на день: {num.price} $</li>
            </ul>
              <Link 
               to="/booking" style={{textDecoration:"none"}}>
                <button   className="main-button-num">
                  <p className="p-promotion">Бронювання</p>
                  <img src={Raw} alt="paw" />
                </button>
              </Link>
          </div>
        </div>
      </div>
      <UncontrolledExample />
    </>
  );
}

export default FullNumbers;
