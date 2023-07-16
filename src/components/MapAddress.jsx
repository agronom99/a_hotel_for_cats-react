import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Map from "../assets/img/Screenshot_4.jpg";
import Fon from "../assets/img/Rectangle50.svg";
import Facebook from "../assets/img/facebook.svg";
import Instagram from "../assets/img/instagram.svg";
import Telegram from "../assets/img/telegram_logo_icon_144811.svg";

function KitchenSinkExample() {
  return (
    <Card
      style={{
        width: "30rem",
        height: "580px",
        flexDirection: "row-reverse",
        left: "880px",
        backgroundColor: "#fd7e14g",
      }}
      className="maps"
    >
      <Card.Img
        variant="top"
        src={Map}
        className="map"
        style={{ width: "798px" }}
      />
      <div style={{ backgroundImage: `URL(${Fon})` }}>
        <Card.Body style={{ width: "550px",  padding: " 70px 0 35px 170px" }} className="map-text">
          <Card.Title style={{fontSize:"36px",}} >Як нас знайти</Card.Title>
          <Card.Text>
            Адреса:
            <br /> м.Вінниця,
            <br /> вул. Келецька, д...
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

        <Card.Title style={{ padding: " 10px 0 20px 170px" }}>Соціальні мережі</Card.Title>

        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Card.Body style={{ padding: " 0px 0 35px 170px"}}>
          <Card.Link href="#"> <img src={Facebook} alt="Facebook" /></Card.Link>
          <Card.Link href="#"><img src={Instagram} alt="Instagram" /></Card.Link>
          <Card.Link href="#"style={{paddingLeft:"5px"}} ><img style={{width:"22px"}} src={Telegram} alt="Telegram" /></Card.Link>

        </Card.Body>
      </div>
    </Card>
  );
}

export default KitchenSinkExample;
