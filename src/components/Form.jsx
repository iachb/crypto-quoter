import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencies } from "../data/currencies";
import { useEffect, useState } from "react";

const Form = () => {
  const [crypto, setCrypto] = useState([]);
  const [currency, SelectCurrency] = useSelectCurrency(
    "Choose your currency",
    currencies
  ); // Note to self: Array destructuring, the first element is the state and the second element is the component.
  // useSelectCurrency returns [state, SelectCurrency] and we are destructuring it here.

  const [cryptocurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Choose your crypto-currency",
    crypto
  );

  useEffect(() => {
    const consultAPI = async () => {
      // Query the API for the exchange rate
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const result = await fetch(url);
      const data = await result.json();
      console.log(data.Data);
      const cryptoArray = data.Data.map((crypto) => {
        const object = {
          id: crypto.CoinInfo.Id,
          name: crypto.CoinInfo.FullName,
        };
        return object;
      });
      setCrypto(cryptoArray);
    };
    consultAPI();
  }, [currency]);

  const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    margin-top: 30px;

    &:hover {
      background-color: #7a7dfe;
      cursor: pointer;
    }
  `;

  return (
    <>
      <form>
        <SelectCurrency />
        <SelectCryptoCurrency />
        <InputSubmit type="submit" value={"Quote"} />
      </form>
    </>
  );
};

export default Form;
