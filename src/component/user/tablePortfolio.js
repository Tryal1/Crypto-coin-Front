import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myCoinsData } from "../../reducer/action";
import { Td, TdColor, TrAnimation } from "../styled";

const TablePortfolio = ({ myCoins}) => {
  const [data, setData] = useState();
  let price = 0;
  let amount = 0;
  let profit = 0;
  useEffect(async () => {
    setData(await myCoinsData(myCoins.name));
  }, [myCoins]);


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
          (myCoins?.coin?.map((coin) => {
            amount = coin.amount + amount;
          }),
          amount * data?.market_data?.current_price?.usd)
        }
        <br />
        <span>{amount}</span>
      </Td>
      <Td>
        $
        {
          (myCoins.coin.map((coin) => {
            price = coin.price + price;
          }),
          (price = price / amount))
        }
      </Td>
      <TdColor porsen={amount * data?.market_data?.current_price?.usd - (price * amount)}>
        $
        {
         profit = (amount * data?.market_data?.current_price?.usd - (price * amount)).toFixed(2)
        }
        {
         
        }
      </TdColor>
      <Td>+ -</Td>
    </tr>
  );
};
export default TablePortfolio;
