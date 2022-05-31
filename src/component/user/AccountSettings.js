import { useDispatch, useSelector } from "react-redux";
import { AccountUserContainer } from "../styled";
import SearchBar from "../searchBar";
import { useState } from "react";
import { actualizarUsuario } from "../../reducer/action";
import { Field, Form, Formik } from "formik";
import TextInput from '../textInput'

const AccountSettings = () => {
  const [changeUser, setChangeUser] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const url = window.location.href;
  const id = url
    .split("/")
    .filter((x) => x)
    .pop();

  const user = useSelector((e) => e.user);

  const changeName = (e) => {
    setChangeUser({ name: e.target.value });
  };

  const saveChange = () => {
    if (
      changeUser.name &&
      changeUser.name.toLowerCase() !== user.name.toLowerCase()
    ) {
      dispatch(actualizarUsuario(changeUser, user.uid));
    }
  };

  const validate = async (values) => {;
    const errors = {};
    if (!values.password) {
      errors.password = "La contraseña es obligatoria";
    }
    if (values.password.length < 6) {
      errors.password = "La contraseñadebe tener almenos 6 caracteres";
    }
    if(values.password !== values.password2){
      errors.password = "Las contraseñas deben coincidir";
    }
    return errors;
  };

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <AccountUserContainer>
        <div className="flexR">
          <img src="../usuario.png" />
          <button className="btn btn-verde">Edit Avatar</button>
        </div>
        <div className="flexC">
          <input
            className="inputAcc"
            onChange={changeName}
            placeholder={user.name.toUpperCase()}
          />
          <input className="inputAcc" disabled value={user.email} />
          <button className="btn btn-verde" onClick={saveChange}>
            Save
          </button>
        </div>
        <div className="flexC">
          <h3>Change password</h3>
          <Formik
            initialValues={{ password: "", password2: "" }}
            validate={validate}
            onSubmit={(values) => {
              if(values.password === values.password2){
                dispatch(actualizarUsuario({password:values.password}, user.uid));
              }
            }}
          >
            <Form className="flexC">
              <div className="flexC">
                <TextInput name="password" label="Password" className="inputAcc" />
                <Field
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  className="inputAcc"
                />
              </div>
              <div>
                <button type="sumbit" className="btn btn-red">
                  Change
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </AccountUserContainer>
    </div>
  );
};

export default AccountSettings;
