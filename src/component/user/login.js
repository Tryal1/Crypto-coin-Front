import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../reducer/action";
import { ErrorMsj, LogIn } from "../styled";
import TextInput from "../textInput";

const FormLogin = () => {
  const popUpClose = useRef();
  const visible = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState();

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

  const validate = (values) => {
    const errors = {};
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
          <img src="../logIn.png" />
        </span>{" "}
        Log In
      </LogIn>

      <div className="popUp-container" ref={visible}>
        <div className="popUp popUp-close" ref={popUpClose}>
          <p className="close" onClick={close}>
            X
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={validate}
            onSubmit={async (values) => {
              const error = await dispatch(
                loginUser({ email: values.email, password: values.password })
              );
              if (error.msg) {
                setError(error);
              } else {
                close();
                setTimeout(() => {
                  window.location.reload();
                }, 300);
              }
            }}
          >
            <Form className="formulario">
              <legend>Login</legend>
              <div className="contenedor-de-cmapos">
                <div className="campo">
                  <TextInput name="email" label="Email" />
                  {/* <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="imput-text"
                  /> */}
                </div>
                <div className="campo">
                  <TextInput name="password" label="Password" />
                  {error?.msg ? <ErrorMsj>{error?.msg}</ErrorMsj> : null}
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
                  Login
                </button>
              </div>
              <p>¿Olvidaste tu Contraseña?</p>
              <p>register</p>
            </Form>
          </Formik>
        </div>
      </div>

      {/* <div className="popUp-container" ref={visible}>
        <div className="popUp popUp-close" ref={popUpClose}>
          <p className="close" onClick={close}>
            X
          </p>
          <form className="formulario">
            <legend>Login</legend>
            <div className="contenedor-de-cmapos">
              <div className="campo">
                <input
                  className="imput-text"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="campo">
                <input
                  className="imput-text"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="enviar">
              <button type="sumbit" className="btn">
                Login
              </button>
            </div>
            <p>¿Olvidaste tu Contraseña?</p>
            <p>register</p>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default FormLogin;
