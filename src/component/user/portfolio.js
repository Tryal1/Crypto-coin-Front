import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCoins, coinsList, modifMyCoins } from "../../reducer/action";
import { Table, Td, Thead, Tr, BalanceContainer, AddnewCoin } from "../styled";
import TablePortfolio from "./tablePortfolio";
import { func } from "./user";
import SearchBar from "../searchBar";
import AddNew from "./addnew";

const Portfolio = () => {
  const popUpClose = useRef();
  const visible = useRef();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [coinData, setCoinData] = useState({ name: "", id: "",avg:0});

  const open = (name, id,avg) => {
    popUpClose.current.classList.toggle("popUp-close");
    visible.current.classList.toggle("visible");
    setCoinData({ name, id,avg });
  };
  const close = () => {
    popUpClose.current.classList.toggle("popUp-close");
    setTimeout(() => {
      visible.current.classList.toggle("visible");
    }, 320);
  };

  const dispatch = useDispatch();
  const [myCoins, setMycoins] = useState();
  const [reload, setReaload] = useState(true);
  let tot = 0;
  const user = useSelector((e) => e.user);
  const priceMyCoins = useSelector((e) => e.myCoins);
  priceMyCoins.forEach((e) => {
    tot += e.price;
  });

  const titles = [
    "Name",
    "Price",
    "24h",
    "Holding",
    "Avg. Buy Pric",
    "Profit/Loss",
    "Actions",
  ];

  useEffect(() => {
    dispatch(func());
    dispatch(coinsList("usd"));
  }, [dispatch]);

  useEffect(async () => {
    setMycoins(await getMyCoins(user.uid));
  }, [user,reload]);

  const cargarTransacsion = () => {
    modifMyCoins(coinData, quantity, price, user.uid);
    close();
    setTimeout(() => {
      setReaload(!reload);
    }, 300);
  };

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <BalanceContainer>
        <div className="balance">
          <h1>${tot.toFixed(2)}</h1>
        </div>
        <AddNew setReaload={setReaload} reload={reload} />
      </BalanceContainer>
      <Table>
        <Thead>
          <Tr>
            {titles.map((title, i) => (
              <Td key={i}>{title}</Td>
            ))}
          </Tr>
        </Thead>
        <tbody>
          {myCoins?.map((myCoins, i) => (
            <TablePortfolio key={i} myCoins={myCoins} open={open} setReaload={setReaload} reload={reload}/>
          ))}
        </tbody>
      </Table>
      <AddnewCoin>
        <div className="popUp-container" ref={visible}>
          <div className="popUp popUp-close" ref={popUpClose}>
            <p className="close" onClick={close}>
              X
            </p>
            <div className="contenido-Add">
              <h1 className="add-titulo">Sell</h1>
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
                <button className="add-button" onClick={cargarTransacsion}>
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      </AddnewCoin>
    </div>
  );
};

export default Portfolio;
