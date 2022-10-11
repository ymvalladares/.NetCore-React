import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Context } from "../Context/context";

const Help = () => {
  const ctx = useContext(Context);

  const handlerValueSelect = (e) => {
    ctx.searchUserSelect(e.target.value);
  };
  const checkMinor = (e) => {
    console.log(e.target.name);
    ctx.searchUserCheckMinor(e.target.checked);
    console.log(e.target.checked);
  };

  const checkBetter = (e) => {
    ctx.searchUserCheckBetter(e.target.checked);
    console.log(e.target.checked);
  };

  const handlerSwitch = (e) => {
    console.log(e);
    switch (e.target.defaultValue) {
      case "prueba1":
        ctx.searchUserSwitch(e.target.checked, 0, 150);
        break;
      case "prueba2":
        ctx.searchUserSwitch(e.target.checked, 150, 300);
        break;
      case "prueba3":
        ctx.searchUserSwitch(e.target.checked, 300, 450);
        break;
      case "prueba4":
        ctx.searchUserSwitch(e.target.checked, 450, 15000);
        break;
    }
  };

  return (
    <>
      <Form>
        <div className="mt-3 ms-3">
          <Form.Check
            className="fw-bold"
            type="checkbox"
            label="Bigger Amount Donate"
            onChange={checkBetter}
          />
        </div>
      </Form>
      <Form>
        <div className="mt-3 ms-3">
          <Form.Check
            className="fw-bold"
            type="checkbox"
            label="Minor Amount Donate"
            onChange={checkMinor}
            name="minor"
          />
        </div>
      </Form>
      <Form>
        <div className="mt-3 ms-3">
          <Form.Check
            className="fw-bold"
            type="checkbox"
            label="default checkbox"
          />
        </div>
      </Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="0 - 150"
        className="mt-3 ms-3 fw-bold"
        onChange={handlerSwitch}
        value="prueba1"
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="150 - 300"
        className="mt-3 ms-3 fw-bold"
        onChange={handlerSwitch}
        value="prueba2"
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="300 - 450"
        className="mt-3 ms-3 fw-bold"
        onChange={handlerSwitch}
        value="prueba3"
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Better than 450"
        className="mt-3 ms-3 fw-bold"
        onChange={handlerSwitch}
        value="prueba4"
      />
      <Form.Select
        className="ms-1 mt-2"
        aria-label="Default select example"
        onChange={handlerValueSelect}
      >
        <option className="fw-bold">Order By Amount Donate</option>
        <option className="fw-bold" value="1">
          Ascendente
        </option>
        <option className="fw-bold" value="2">
          Descendente
        </option>
      </Form.Select>
    </>
  );
};

export default Help;
