import Card from "react-bootstrap/Card";
import Facebook from "../assets/img/facebook.svg";
import Instagram from "../assets/img/instagram.svg";
import Telegram from "../assets/img/telegram_logo_icon_144811.svg";
const Maps =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927.012069228429!2d28.42516897540222!3d49.228298771384615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c64796677af%3A0x2aa0817570ca6f6!2z0LLRg9C70LjRhtGPIDYwMC3RgNGW0YfRh9GPLCAxNywg0JLRltC90L3QuNGG0Y8sINCS0ZbQvdC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e1!3m2!1suk!2sua!4v1689686890189!5m2!1suk!2sua";

function KitchenSinkExample() {
  return (
    <Card id="find">
      <div>
        <iframe title="map" src={Maps}></iframe>
      </div>
      <div className="map-text">
        <Card.Body >
          <Card.Title>Як нас знайти</Card.Title>
          <Card.Text>
            Адреса:
            <br /> м.Вінниця,
            <br /> вул. 600-річчя, д...
          </Card.Text>
          <Card.Text>
            Режим роботи
            <br /> щодня, з 9:00 до 20:00
          </Card.Text>
          <Card.Text>
            Phone <br /> +38(099) 999-99-99
          </Card.Text>
          <Card.Text>
            E-mail
            <br /> info@cat-hotel.ua
          </Card.Text>
        </Card.Body>

        <Card.Title className="title" >
          Соціальні мережі
        </Card.Title>

        <Card.Body className="title-body">
          <Card.Link href="#">
            <img src={Facebook} alt="Facebook" />
          </Card.Link>
          <Card.Link href="#">
            <img src={Instagram} alt="Instagram" />
          </Card.Link>
          <Card.Link href="#" >
            <img style={{ width: "22px" }} src={Telegram} alt="Telegram" />
          </Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default KitchenSinkExample;
