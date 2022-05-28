import { useEffect, useRef, useState } from "react";
import { getUser } from "../reducer/action";
import { AcountContainer } from "./styled";

const User = () => {
  const [user, setUser] = useState();
  const active = useRef();
  const activeUSer = () => {
    active.current.classList.toggle("active");
  };

  const usuario = async () => {
    const data = await getUser("62755c54d89b35a6a3db3058");
    console.log(data);
    setUser(data);
  };

  const func = () => {
    fetch(`http://localhost:4000/usuarios`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'xtoken':localStorage.getItem('xtoken'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  console.log(user)
  useEffect(() => {
    func();
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <AcountContainer>
      <img src="user.png" onClick={activeUSer} />
      <div className="account flex" ref={active}>
        <div className="accountUser flex">
          <img src="usuario.png" />
          <h3>Nombre Usuario</h3>
        </div>
        <div className="accountEnlaces flex">
          <a href="#">PortFolio</a>
          <a href="#">Account Settings</a>
          <a href="#" onClick={logOut}>
            Log Out
          </a>
        </div>
      </div>
    </AcountContainer>
  );
};

export default User;
