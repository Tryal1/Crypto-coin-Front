import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AcountContainer } from "../styled";

export const func = () => (dispatch) => {
  fetch(`http://localhost:4000/usuarios`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      xtoken: localStorage.getItem("xtoken"),
    },
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: "SET_USER",
        payload: data,
      })
    );
};

const User = () => {
  const active = useRef();
  const dispatch = useDispatch();
  const user = useSelector(e=>e.user)
  const activeUSer = () => {
    active.current.classList.toggle("active");
  };


  useEffect(() => {
    dispatch(func());
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.reload();
    window.location.replace('/')
  };

  return (
    <AcountContainer>
      <img src="../user.png" onClick={activeUSer} />
      <div className="account flex" ref={active}>
        <div className="accountUser flex">
          <img src="../usuario.png" />
          <h3>{user?.name?.toUpperCase()}</h3>
        </div>
        <div className="accountEnlaces flex">
          <Link to={`/portfolio`}>PortFolio</Link>
          <Link to={`/user/${user?.name}`}>Account Settings</Link>
          <a onClick={logOut}>
            Log Out
          </a>
        </div>
      </div>
    </AcountContainer>
  );
};

export default User;
