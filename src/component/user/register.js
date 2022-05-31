import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { loginUser, registerUser } from "../../reducer/action";
import { LogIn } from "../styled";
import TextInput from "../textInput";

const Register = () => {
  const popUpClose = useRef();
  const visible = useRef();

  const open = () => {
    popUpClose.current.classList.toggle("popUp-close");
    visible.current.classList.toggle("visible");
  };
  const close = () => {
    popUpClose.current.classList.toggle("popUp-close");
    setTimeout(() => {
      visible.current.classList.toggle("visible");
    }, 320);
  };

  return (
    <div>
      <LogIn onClick={open}>
        <span>
          <img src="../register.png" />
        </span>{" "}
        Register
      </LogIn>

      <div className="popUp-container" ref={visible}>
        <div className="popUp popUp-close" ref={popUpClose}>
          <p className="close" onClick={close}>
            X
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              rol: "USER_ROLE",
            }}
            onSubmit={(values) => {
              registerUser(values);
            }}
          >
            <Form className="formulario">
              <legend>Register</legend>
              <div className="contenedor-de-cmapos">
                <div className="campo">
                <TextInput name="name" label="Name"/>
                  {/* <Field
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="imput-text"
                  /> */}
                </div>
                <div className="campo">
                <TextInput name="email" label="Email"/>
                  {/* <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="imput-text"
                  /> */}
                </div>
                <div className="campo">
                <TextInput name="password" label="Password"/>
                  {/* <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="imput-text"
                  /> */}
                </div>
              </div>
              <div className="enviar">
                <button type="sumbit" className="btn">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
