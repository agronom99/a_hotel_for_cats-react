import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Cards1 from "../assets/img/Rectangle46.jpg";
import PawI from "../assets/img/paw_inv.svg";

function KitchenSinkExampleCard() {
  return (
  
    <>
      <Card className="cards">
        <Card.Img variant="top" src={Cards1} />
        <Card.Body>
          <Card.Title>Економ</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Розміри (ШхГхВ) - 90х70х180 см</ListGroup.Item>
          <ListGroup.Item>Площа - 0,63 м2</ListGroup.Item>
          <ListGroup.Item>Оснащення кімнати:</ListGroup.Item>
          <ListGroup.Item>Ціна на день:10$</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">
            <p> Забронювати</p>
            <img src={PawI} alt="paw" style={{ width: "34px" }} />
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default KitchenSinkExampleCard;
