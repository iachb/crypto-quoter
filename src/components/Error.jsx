import styled from "@emotion/styled";
import propTypes from "prop-types";

const Error = ({ children }) => {
  const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-family: "Lato", sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  `;

  return (
    <div>
      <Text>{children}</Text>
    </div>
  );
};

Error.propTypes = {
  children: propTypes.node.isRequired,
};

export default Error;
