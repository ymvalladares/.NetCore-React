import Table from "react-bootstrap/Table";
import "./ViewList.css";
import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "react-bootstrap/Button";
import { Context } from "../Context/context";
import MessageAlert from "../Alert/MessageAlert";
import Input from "../Input/Input";
import { DeleteUser } from "../../actions/service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "https://localhost:44376/user/user/delete/";

const ViewList = () => {
  const ctx = useContext(Context);
  //console.log(ctx);

  const handlerDelete = (id) => {
    let confirm = window.confirm("Do you want to delete this user?");
    if (confirm) {
      DeleteUser(url, id)
        .then((response) => {
          console.log(response);
          toast.success("User deleted successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
          });
          ctx.removeUser(id);
        })
        .catch((error) => {
          console.log(error);
          //toastr
          toast.warning(
            "Imposible to delete this user. Please contact with one admin",
            {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
            }
          );
        });
    } else console.log("rechazado");
  };

  let i = 1;
  return (
    <>
      <Input />
      {ctx.users.length > 0 ? (
        <div className="container">
          <div className="mt-2">
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>AmountDonate</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {ctx.users.map((obj, key) => (
                <tbody key={key}>
                  <tr>
                    <td>{i++}</td>
                    <td>{obj.name}</td>
                    <td>{obj.lastName}</td>
                    <td>{obj.email}</td>
                    <td>{obj.age}</td>
                    <td>{obj.amountDonate}</td>
                    <td>
                      <Modal type="Update" message="Amount Donate" user={obj} />
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handlerDelete(obj.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      ) : (
        //
        <MessageAlert variant="danger" message="Not users found" />
      )}
      <ToastContainer />
    </>
  );
};

export default ViewList;

// const url = "https://localhost:44376/user/user/delete/";
