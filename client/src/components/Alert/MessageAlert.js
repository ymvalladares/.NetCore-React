import React from "react";
import Alert from "react-bootstrap/Alert";
import Boton from "../Boton/Boton";

const MessageAlert = (props) => {
  return (
    <>
      <div className="container">
        <Alert className="text-center mt-4 fw-bold" variant={props.variant}>
          <p>{props.message}</p>
          <Boton
            variant="outline-danger"
            name="Go Back"
            className="col text-center"
            href="/shop"
          />
        </Alert>
      </div>
    </>
  );
};

export default MessageAlert;
