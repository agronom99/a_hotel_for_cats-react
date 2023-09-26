import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo_Group_50 from "../assets/img/Logo_Group_50.svg";
import Logo_kot from "../assets/img/KOTEYKA.svg";

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container style={{}}>
          <Navbar.Brand>
            <Link to="home">
              <div className="logo">
                <img className="logo-1" src={Logo_Group_50} alt="logo" />
                <img className="logo-2" src={Logo_kot} alt="logo_kot" />
              </div>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://agronom99.github.io/home/#why">Чому ми?</Nav.Link>
            <Nav.Link href="https://agronom99.github.io/home/#numbers">Номера</Nav.Link>
            <Nav.Link href="https://agronom99.github.io/home/#reviews">Відгуки</Nav.Link>
            <Nav.Link href="https://agronom99.github.io/home/#find">Як нас знайти</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
