import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import Cards1 from "../../assets/img/cat/Rectangle46.jpg";
import PawI from "../../assets/img/paw_inv.svg";

function KitchenSinkExampleCard(props) {
  console.log(props);
  return (
    <>
      <Card className="cards">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Розміри - ({props.sizes}) см</ListGroup.Item>
          <ListGroup.Item>Площа - {props.area} м2</ListGroup.Item>
          <ListGroup.Item>
          <div style={{display:"flex"}}> Оснащення кімнати:
            {props.equipment.map(el=> <div key={el}>
             <img src={el} alt="cat" style={{height:"18px", width:"18px"}} /> 
              </div>)} </div>
          </ListGroup.Item>
          <ListGroup.Item>Ціна на день: {props.price} $</ListGroup.Item>
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
