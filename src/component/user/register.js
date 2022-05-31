import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { loginUser, registerUser } from "../../reducer/action";
import { ErrorMsj, LogIn } from "../styled";
import TextInput from "../textInput";

const Register = () => {
  const popUpClose = useRef();
  const visible = useRef();
  const [error,setError] = useState()

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

  const validate = async (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "El nombre es obligatorio";
    }
    if (!values.email) {
      errors.email = "No hay un mail ingresado";
    }
    if (!values.password) {
      errors.password = "La contraseña es obligatoria";
    }
    return errors;
  };

  return (
    <div>
      <LogIn onClick={open}>
        <span>
          <img src="../register.png" />
        </span>
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
            validate={validate}
            onSubmit={async (values) => {
             setError(await registerUser(values));
            }}
          >
            <Form className="formulario">
              <legend>Register</legend>
              <div className="contenedor-de-cmapos">
                <div className="campo">
                  <TextInput name="name" label="Name" />
                  {/* <Field
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="imput-text"
                  /> */}
                </div>
                <div className="campo">
                  <TextInput name="email" label="Email" />
                  {error?.errors?.map(e => {
                    if(e.param === 'email'){
                      return(<ErrorMsj>{e.msg}</ErrorMsj>)
                    }
                  })}
                  {/* <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="imput-text"
                  /> */}
                </div>
                <div className="campo">
                  <TextInput name="password" label="Password" />
                  {error?.errors?.map(e => {
                    console.log(e.param)
                    if(e.param === "password"){
                      return(<ErrorMsj>{e.msg}</ErrorMsj>)
                    }
                  })}
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
