import CoinsTable from "./coinstable";
import { Table, Td, Thead, Tr } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { filtroCrypto } from "../reducer/action";
import { useEffect, useState } from "react";

const TableData = ({ setRender }) => {
  const titles = [
    "#",
    "Coins",
    " ",
    "Price",
    "1h",
    "24h",
    "7d",
    "24h Volume",
    "Mkt Cap",
  ];
  const coins = useSelector((e) => e.coins);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleClik = (title) => {
    setFilter(title);
  };
  useEffect(() => {
    dispatch(filtroCrypto(filter));
    setRender(filter);
    setFilter("");
  }, [dispatch, filter]);

  return (
    <Table>
      <Thead>
        <Tr>
          {titles.map((title, i) => (
            <Td key={i} onClick={() => handleClik(title)}>
              {title}
            </Td>
          ))}
        </Tr>
      </Thead>
      <tbody>
        {coins?.map((coins) => (
          <CoinsTable key={coins.id} coins={coins} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableData;
