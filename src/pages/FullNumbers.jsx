import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Raw from "../assets/img/paw.svg";

import UncontrolledExample from "../components/Carousel";
import axios from "axios";

function FullNumbers() {
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

  return (
    <>
      <div className="full-numbers">
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
            <Link to="numbers" style={{textDecoration:"none"}}>
        <button className="main-button-num">
          <p className="p-promotion">Забронювати</p>
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
