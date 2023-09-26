import React from "react";
import paw from "../assets/img/pawC.svg";
import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
import icon4 from "../assets/img/icon4.svg";
import icon5 from "../assets/img/icon5.svg";
import icon6 from "../assets/img/icon6.svg";

const SectionConditions = () => {
  return (
    <div>
      <section className="conditions">
        <img className="raw" src={paw} alt="raw" />
        <h2 id="#why">Чому ми?</h2>
        <ul>
          <li>
            <img src={icon1} alt="rectable 9" />
            <h3>Комфортна температура</h3>
            <p>
              Усі кімнати підтримують комфортну температуру всередині 23 - 25
              градусів. У кожній кімнаті ви можете додатково регулювати
              температуру.
            </p>
          </li>
          <li>
            <img src={icon2} alt="rectable 9" />
            <h3>Відеоспостереження</h3>
            <p>
              Ми надаємо доступ до нашої системи. Ви можете слідувати Свого
              вихованця зі свого смартфона чи комп’ютера.
            </p>
          </li>
          <li>
            <img src={icon3} alt="rectable 9" />
            <h3>Послуги Зоотаксі</h3>
            <p>
              Усі кімнати підтримують комфортну температуру всередині 23 - 25
              градусів. У кожній кімнаті ви можете додатково регулювати
              температуру.
            </p>
          </li>
          <li>
            <img src={icon4} alt="rectable 9" />
            <h3>Збалансоване харчування</h3>
            <p>
              Ви можете принести їжу або доручити дієту для домашніх тварин Наші
              професіонали.
            </p>
          </li>
          <li>
            <img src={icon5} alt="rectable 9" />
            <h3>Щоденні прогулянки</h3>
            <p>
              На ваше прохання ми ходимо вашого вихованця двічі на день
              Спеціалізована закрита територія.
            </p>
          </li>
          <li>
            <img src={icon6} alt="rectable 9" />
            <h3>Найкращі ветеринари</h3>
            <p>
              Ветеринар, який надасть готель за 24 години, чергується Будь -яка
              допомога, якщо це необхідно.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SectionConditions;
