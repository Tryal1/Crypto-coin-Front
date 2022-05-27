import { useEffect, useState } from "react";
import { ContainerConvert } from "./styled";
import CurrencyRow from "./currencyRow";

const Convert = ({coin}) => {
  const [fromCurrency, setFromCurrency] = useState(''); //nombre moneda
  const [toCurrency, setToCurrency] = useState('usd'); //nombre moneda
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let fromAmount, toAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const Convertir = (fromCurrency, toCurrency, amount) => {
    fetch(
      `https://api.coinconvert.net/convert/${fromCurrency}/${toCurrency}?amount=${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data[toCurrency.toUpperCase()]);
      });
  };

  useEffect(() => {
    setFromCurrency(coin)
    Convertir(fromCurrency, toCurrency, amount);
  }, [fromCurrency, toCurrency,coin]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };
  return (
    <ContainerConvert>
      <div className="flex">
        <CurrencyRow
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          selectedCurrency={fromCurrency}
        />
      </div>
      <div className="flex">
        <CurrencyRow
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          selectedCurrency={toCurrency}
        />
      </div>
    </ContainerConvert>
  );
};

export default Convert;
