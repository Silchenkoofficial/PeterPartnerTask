import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Valute({
  balance,
  currency
}) {
  console.log(currency);
  const [newBalance, setNewBalance] = useState(0);

  const convertValute = () => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
      const rates =
        currency === "RUB"
          ? res.data.Valute.USD.Value
          : res.data.Valute[currency].Value;

      console.log(rates);

      const rub = Math.abs(balance * res.data.Valute.USD.Value);
      const result = currency === 'RUB' ? rub : rub / rates;

      setNewBalance(
        result
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
      );
    });
  }

  useEffect(() => {
    convertValute();
  }, [currency]);

  return <div>{newBalance}</div>;
}

export default Valute;
