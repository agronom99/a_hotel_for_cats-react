import Carousel from "react-bootstrap/Carousel";

import pawR from "../assets/img/pawR.svg";
import Lapka from "../assets/img/Lapka.svg";

function UncontrolledExampleReviews() {
  return (
    <Carousel className="reviews">
      <Carousel.Item>
        <img className="d-block  fotoR" src={pawR} alt="First slide" />

        <Carousel.Caption>
          <h3 className="carousel-h3">Відгуки</h3>
          <div className="blok">
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                    Перший раз, коли мені довелося покинути нашу кішку в готелі,
                    дуже збентежений. Адміністратор Марія щодня надсилала нам
                    фотографію. Наш домашній улюбленець сказав, як він
                    почувається. І ми і Кіт був дуже задоволений!
                  </h6>
                </li>
                <div>
                  <p>Валерія Гришаєва</p>
                  <p>15 листопада 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Друзі порадили нам готель для домашніх тварин. Вони завжди залишають тут свою кішку, коли виїжджають. Котека дуже добре піклується про домашніх тварин, готель дуже чистий. Всім рекомендую! Ми знову зв’яжемось.
                  </h6>
                </li>
                <div>
                  <p>Екатерина Мінаєва</p>
                  <p>10 жовтня 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Моя кішка - справжня парафія, йому важко догодити йому. У мене були особливі вимоги до догляду за ним, і «кіт» добре справлявся. Я часто дивився відео з телефону з телефону, це дуже зручно.
                  </h6>
                </li>
                <div>
                  <p>Павло <br/> Нечаєв</p>
                  <p>2 серпня <br/> 2022 року</p>
                </div>
              </ul>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  fotoR" src={pawR} alt="First slide" />

        <Carousel.Caption>
          <h3 className="carousel-h3">Відгуки</h3>
          <div className="blok">
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                    Перший раз, коли мені довелося покинути нашу кішку в готелі,
                    дуже збентежений. Адміністратор Марія щодня надсилала нам
                    фотографію. Наш домашній улюбленець сказав, як він
                    почувається. І ми і Кіт був дуже задоволений!
                  </h6>
                </li>
                <div>
                  <p>Валерія Гришаєва</p>
                  <p>15 листопада 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Друзі порадили нам готель для домашніх тварин. Вони завжди залишають тут свою кішку, коли виїжджають. Котека дуже добре піклується про домашніх тварин, готель дуже чистий. Всім рекомендую! Ми знову зв’яжемось.
                  </h6>
                </li>
                <div>
                  <p>Екатерина Мінаєва</p>
                  <p>10 жовтня 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Моя кішка - справжня парафія, йому важко догодити йому. У мене були особливі вимоги до догляду за ним, і «кіт» добре справлявся. Я часто дивився відео з телефону з телефону, це дуже зручно.
                  </h6>
                </li>
                <div>
                  <p>Павло <br/> Нечаєв</p>
                  <p>2 серпня <br/> 2022 року</p>
                </div>
              </ul>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  fotoR" src={pawR} alt="First slide" />

        <Carousel.Caption>
          <h3 className="carousel-h3">Відгуки</h3>
          <div className="blok">
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                    Перший раз, коли мені довелося покинути нашу кіцьку в готелі, я був
                    дуже збентежений. Адміністратор Марія щодня надсилала нам
                    фотографію. Розповідала як наш домашній улюбленець почувається. І ми і кіця були дуже задоволені!
                  </h6>
                </li>
                <div>
                  <p>Валерія Гришаєва</p>
                  <p>15 листопада 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Друзі порадили нам готель для домашніх тварин. Вони завжди залишають тут свою кіцьку, коли виїжджають. В "Котейці" дуже добре піклуються про наших тварин, готель дуже чистий. Всім рекомендую! Будемо звертатись ще.
                  </h6>
                </li>
                <div>
                  <p>Екатерина Мінаєва</p>
                  <p>10 жовтня 2022 року</p>
                </div>
              </ul>
            </div>
            <div className="ul-R">
              <ul className="ul-li">
                <li style={{ listStyleImage: `url(${Lapka})` }}>
                  <h6>
                 Моя кіт - справжня привереда, йому важко догодити. У мене були особливі вимоги до догляду за ним, і «Котейка» добре справились. Я часто дивився відео з телефону, це дуже зручно.
                  </h6>
                </li>
                <div>
                  <p>Павло <br/> Нечаєв</p>
                  <p>2 серпня <br/> 2022 року</p>
                </div>
              </ul>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExampleReviews;
