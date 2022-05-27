import { useSelector } from "react-redux";
import { Convert } from "./styled";

const CurrencyRow = ({ onChangeAmount, amount,onChangeCurrency,selectedCurrency}) => {
  const divisas = useSelector(e=>e.alldivisas)
  return (
    <Convert>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {divisas.map((divisas) => (
          <option value={divisas} key={divisas}>
            {divisas}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={onChangeAmount} />
    </Convert>
  );
};
export default CurrencyRow;
