import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateUser } from "../../actions/service";
import Lista from "../List/Lista";
import { Context } from "../Context/context";

const url = "https://localhost:44376/user/user/update";

function Example(props) {
  const ctx = useContext(Context);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState();

  const handleClose = () => {
    setShow(false);
  };

  const saveChanges = () => {
    setShow(false);
    if (count) {
      let value = {
        id: props.user.id,
        name: props.user.name,
        lastName: props.user.lastName,
        age: props.user.age,
        email: props.user.email,
        amountDonate: parseInt(count),
      };
      UpdateUser(url, value)
        .then((response) => {
          console.log(response);
          toast.success("User update successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
          });
          ctx.editUser(value);
        })
        .catch((error) => {
          console.log(error);
          //toastr
          toast.warning(
            "Imposible to update this user. Please contact with one admin",
            {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
            }
          );
        });
    }
  };
  const handleShow = () => setShow(true);

  const handlerCount = (event) => {
    setCount(event.target.value);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {props.type}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Text id="passwordHelpBlock" muted>
              <p className="mt-2 text-success fw-bold">
                {"Hi " + `${props.user.name}` + ", thank you so much"}
              </p>
            </Form.Text>
            <Form.Control
              type="number"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder={props.user.amountDonate}
              onChange={handlerCount}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Example;
