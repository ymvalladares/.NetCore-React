import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Card className="container mt-5 col-6 text-center ">
      <Card.Header as="h5" className="text-primary fw-bold">
        About Contact Manager
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-primary">
          Simple app to manage contacts
        </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Text as="p" className="text-success fw-bold">
          Version 1.0.0
        </Card.Text>
        <Button href="/" variant="primary">
          Go Home Page
        </Button>
      </Card.Body>
    </Card>
  );
};

export default About;
