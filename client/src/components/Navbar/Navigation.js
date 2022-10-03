import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Boton from "../Boton/Boton";
import imagen from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand className="text-dark fw-bold">
        <img
          alt=""
          src={imagen}
          width="35"
          height="35"
          className="d-inline-block align-top mx-5"
        />
        React Bootstrap
        <i className="bi bi-star-fill ms-5 text-danger"></i>
      </Navbar.Brand>
      <Nav className=" offset-4">
        <Nav.Link href="/" className="text-dark fw-bold">
          Home
        </Nav.Link>
        <Nav.Link href="/shop" className="text-dark fw-bold">
          Store
        </Nav.Link>
        <Nav.Link href="/about" className="text-dark fw-bold">
          About
        </Nav.Link>
      </Nav>
      <Boton
        variant="outline-primary"
        className="mx-5"
        href="/createUser"
        name="New User"
      />
    </Navbar>
  );
};

export default Navigation;
