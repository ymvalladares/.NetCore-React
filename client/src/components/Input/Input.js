import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Context } from "../Context/context";

const Input = () => {
  const ctx = useContext(Context);
  const [handlerInput, setHandlerInput] = useState();

  const handlerValue = (event) => {
    console.log(event);
    setHandlerInput(event.target.value);
  };

  return (
    <>
      <Form.Group className=" offset-4 col-4 mb-3 mt-3">
        <div className="d-flex">
          <Form.Control
            placeholder="User's email"
            aria-label="User's email"
            aria-describedby="basic-addon2"
            onChange={handlerValue}
          />

          <Button
            variant="outline-success"
            id="button-addon2"
            onClick={() => ctx.searchUserInput(handlerInput)}
          >
            Search
          </Button>
        </div>
      </Form.Group>
    </>
  );
};

export default Input;
