import { useEffect, useRef, useState } from "react";
import { Centrar } from "./styled";
import TableData from "./table";
import { useDispatch, useSelector } from "react-redux";
import { coinsList, Divisas, SetDivisa } from "../reducer/action";
import SearchBar from "./searchBar";
import Filtros from "./filtros";

const Home = () => {
  const dispatch = useDispatch();
  const [render, setRender] = useState(1);
  const divisas = useSelector((e) => e.divisas);
  const categoria = useSelector(e=>e.setCategory)
  const renderizar = () => {
    setRender(render * -1);
  };

  useEffect(() => {
    dispatch(coinsList(divisas,categoria));
    dispatch(Divisas());
    dispatch(SetDivisa(divisas));
  }, [dispatch, divisas,categoria]);

  return (
    <Centrar>
      <SearchBar/>
      <Filtros/>
      <TableData setRender={renderizar} />
    </Centrar>
  );
};

export default Home;
//https://api.coinconvert.net/convert/eth/usd?amount=2 convert

//https://api.coingecko.com/api/v3/simple/supported_vs_currencies   divisas

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=69ad0be6f599f2934977 conver
