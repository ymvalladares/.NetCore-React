import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as Yup from "yup";
import classes from "./CreateUser.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../Context/context";
import { useNavigate } from "react-router-dom";
import { create } from "../../actions/service";

//SOLO HAY Q INSTALAR EL PAQUETE DE FORMIK Y DE YUP
const url = "https://localhost:44376/user/user/add";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  age: Yup.number().required().min(18).max(90),
  amountDonate: Yup.number().required(),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const CreateUser = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();

  const constDates = async (props, actions) => {
    const values = {
      ...props,
      age: parseInt(props.age),
      amountDonate: parseFloat(props.amountDonate),
    };
    create(url, values)
      .then((response) => {
        console.log(response);
        ctx.addUser(values);
        navigate("/shop");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          //toastr
          toast.warning(error.response.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
          });
        } else if (error.code === "ERR_NETWORK") {
          //toastr
          toast.error(error.message + ". Please contact with admins", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
          });
        } else {
          //toastr;
          toast.error("Imposible to add user", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
          });
        }
      });
    actions.resetForm();
  };

  return (
    <div>
      <div className={classes.fondo}>
        <div className="container mt-5">
          <Formik
            validationSchema={schema}
            onSubmit={constDates}
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              age: "",
              amountDonate: "",
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className={classes.summary}
              >
                <Row className="mb-3">
                  <Form.Group
                    md="4"
                    controlId="validationFormik01"
                    className="offset-3 col-6"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={errors.name}
                      isValid={!errors.name && touched.name}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="offset-3 col-6"
                    md="4"
                    controlId="validationFormik02"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      isValid={!errors.lastName && touched.lastName}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    className="offset-3 col-6"
                    mb="6"
                    controlId="validationFormik03"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="yordan@gmail.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      isValid={!errors.email && touched.email}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="offset-3 col-6"
                    md="3"
                    controlId="validationFormik04"
                  >
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Age"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                      isInvalid={!!errors.age}
                      isValid={!errors.age && touched.age}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.age}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="offset-3 col-6"
                    md="3"
                    controlId="validationFormik05"
                  >
                    <Form.Label>AmountDonate</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Amount Donate"
                      name="amountDonate"
                      value={values.amountDonate}
                      onChange={handleChange}
                      isInvalid={!!errors.amountDonate}
                      isValid={!errors.amountDonate && touched.amountDonate}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.amountDonate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3 offset-3 col-6">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    isValid={!errors.terms && touched.terms}
                  />
                </Form.Group>
                <Button
                  disabled={isSubmitting}
                  className="offset-5"
                  type="submit"
                >
                  Submit form
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateUser;
