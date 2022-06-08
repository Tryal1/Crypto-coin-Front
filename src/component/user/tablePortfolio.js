import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { myCoinsData, setMycoins } from "../../reducer/action";
import { Td, TdColor, TrAnimation } from "../styled";

const TablePortfolio = ({ myCoins,open,setReaload,reload}) => {
  const [data, setData] = useState();
  const dispatch = useDispatch()
  useEffect(async () => {
    setData(await myCoinsData(myCoins.name));
  }, [myCoins]);

  useEffect(()=>{
    let resul = myCoins.coin.amount * data?.market_data?.current_price?.usd
    if(!isNaN(resul)){
      dispatch(setMycoins({ name:data.name, price:resul}))
    }
  },[dispatch,myCoins])
  return (
    <tr>
      <Td><span><img src={data?.image?.small} /></span>{data?.name}</Td>
      <Td>${data?.market_data?.current_price?.usd}</Td>
      <TdColor porsen={data?.price_change_percentage_24h}>
        {data?.market_data.price_change_percentage_24h?.toFixed(2)}%
      </TdColor>
      <Td>
        $
        {
          myCoins.coin.amount * data?.market_data?.current_price?.usd.toFixed(2)
        }
        <br />
        <span>{myCoins.coin.amount}</span>
      </Td>
      <Td>
        $
        {
          (myCoins.coin.price / myCoins.coin.amount).toFixed(2)
        }
      </Td>
      <TdColor porsen={myCoins.coin.amount * data?.market_data?.current_price?.usd - (myCoins.coin.price * myCoins.coin.amount)}>
        $
        {
         (myCoins.coin.amount * data?.market_data?.current_price?.usd - (myCoins.coin.price * myCoins.coin.amount)).toFixed(2)
        }
        {
         
        }
      </TdColor>
      <Td><p onClick={()=>open(data.name, myCoins._id,(myCoins.coin.price / myCoins.coin.amount))}>-</p></Td>
    </tr>
  );
};
export default TablePortfolio;
