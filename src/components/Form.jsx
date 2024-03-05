import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencies } from "../data/currencies";

const Form = () => {

  const [SelectCurrency] = useSelectCurrency("Choose your currency", currencies);

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
        <InputSubmit type="submit" value={"Quote"} />
      </form>
    </>
  );
};

export default Form;
