import styled from "@emotion/styled";

const Form = () => {
  
  const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover {
      background-color: #7A7DFE;
      cursor: pointer;
    }
  `;

  return (
    <form>
      <InputSubmit type="submit" value={"Quote"} />
    </form>
  );
};

export default Form;
