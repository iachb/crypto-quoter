import styled from "@emotion/styled";

const useSelectCurrency = (label, options) => {
  const Label = styled.label`
    color: #fff;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
  `;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select name="currency" id="currency" className="u-full-width">
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;
