
import styled from "@emotion/styled";

const useSelectCurrency = (label) => {
  const Label = styled.label`
    color: #fff;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
  `;

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      {/* Add your select input here */}
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;
