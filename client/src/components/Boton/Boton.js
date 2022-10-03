import React from "react";
import Button from "react-bootstrap/Button";

const Boton = (props) => {
  return (
    <div>
      <Button
        variant={props.variant}
        className={props.className}
        href={props.href}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default Boton;
