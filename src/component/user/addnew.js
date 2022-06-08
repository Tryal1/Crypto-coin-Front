import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearMyCoins } from "../../reducer/action";
import { AddnewCoin } from "../styled";

const AddNew = ({setReaload,reload}) => {
  const coins = useSelector((e) => e.coins);
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

  const cargarTransacsion = ()=>{
    crearMyCoins(coinA.id, quantity, price,user.uid);
    close()
    setTimeout(() => {
      setReaload(!reload)
    }, 300);
    
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
