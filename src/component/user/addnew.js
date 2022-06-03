import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearMyCoins } from "../../reducer/action";
import { AddnewCoin } from "../styled";

const AddNew = () => {
  const coins = useSelector((e) => e.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [cargarInfo, setCargarInfo] = useState(true);

  const user = useSelector((e) => e.user);

  const [coinA, setCoinA] = useState();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

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
      setCargarInfo(true);
    }, 320);
  };

  const select = (e) => {
    setCargarInfo(false);
    setCoinA(e);
  };

  const cargarTransacsion = () => {
    dispatch(crearMyCoins(coinA.id, quantity, price,user.uid));
  };

  return (
    <AddnewCoin>
      <div>
        <button className="add-button" onClick={open}>
          Add New
        </button>
      </div>
      <div className="popUp-container" ref={visible}>
        <div className="popUp popUp-close" ref={popUpClose}>
          <p className="close" onClick={close}>
            X
          </p>
          {cargarInfo ? (
            <div className="contenido-Add">
              <h1 className="add-titulo">Select Coin</h1>
              <div className="add-search">
                <div className="add-svg">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="18px"
                    width="18px"
                    viewBox="0 0 24 24"
                    color="neutral4"
                    className="sc-16r8icm-0 fAFbeI"
                  >
                    <path
                      d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg> */}
                </div>
                <input
                  className="add-input"
                  placeholder="Search"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <div className="add-ul">
                {coins
                  .filter((coins) =>
                    coins.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((coin,i) => (
                    <button
                      className="add-button-list"
                      onClick={() => select(coin)}
                      key={i}
                    >
                      <span>
                        <img className="add-img" src={coin.image} />
                      </span>{" "}
                      {coin.name}
                    </button>
                  ))}
              </div>
            </div>
          ) : (
            <div className="contenido-Add">
              <h1 className="add-titulo">Add Transaction</h1>
              <div className="add-search">
                <input
                  defaultValue={coinA.name}
                  className="input-transaction"
                />
              </div>
              <div className="contenido-transaction">
                <div className="transaction-QP">
                  <p>Quantity</p>
                  <input
                    placeholder="0.00"
                    className="input-transaction"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="transaction-QP">
                  <p>Price Per Coin</p>
                  <input
                    className="input-transaction"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="transaction-spnt">
                <p>Total Spnt</p>
                <h3>${quantity * price}</h3>
              </div>
              <div className="transaction-btn">
                <button
                  className="add-button"
                  onClick={cargarTransacsion}
                >
                  Add Transaction
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AddnewCoin>
  );
};

export default AddNew;
