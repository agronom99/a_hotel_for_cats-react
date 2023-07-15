import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Map from "../assets/img/Rectangle26.jpg";

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
      <div style={{backgroundImage: "URL({Map})"}}>
        <Card.Body style={{ width: "550px", backgroundImage: "URL({Map})" }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default KitchenSinkExample;
