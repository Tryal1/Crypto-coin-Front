import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCoins } from "../../reducer/action";
import { Table, Td, Thead, Tr, BalanceContainer } from "../styled";
import TablePortfolio from "./tablePortfolio";
import { func } from "./user";
import SearchBar from "../searchBar";
import Graficos from "../graficos";
import AddNew from "./addnew";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [myCoins, setMycoins] = useState();

  const user = useSelector((e) => e.user);
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
  }, []);

  useEffect(async () => {
    setMycoins(await getMyCoins(user.uid));
  }, [user]);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <BalanceContainer>
        <div className="balance">
          <h1>$Precio</h1>
        </div>
        <AddNew/>
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
          {myCoins?.map((myCoins) => (
            <TablePortfolio key={myCoins.id} myCoins={myCoins} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Portfolio;
