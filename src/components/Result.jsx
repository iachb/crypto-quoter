import propTypes from "prop-types";
import styled from "@emotion/styled";

const Result = ({ result }) => {
  const Results = styled.div`
    color: #fff;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 30px;
  `;

  const Image = styled.img`
    display: block;
    width: 120px;
  `;

  const Text = styled.p`
    font-size: 18px;
    span {
      font-weight: 700;
    }
  `;

  const Price = styled.p`
    font-size: 24px;
    span {
      font-weight: 700;
    }
  `;

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;

  return (
    <Results>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto" />
      <div>
        <Price>
          The Price is: <span>{PRICE}</span>
        </Price>
        <Text>
          The highest price of the day: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          The lowest price of the day: <span>{LOWDAY}</span>
        </Text>
        <Text>
          The last 24 hours change: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Results>
  );
};

Result.propTypes = {
  result: propTypes.object.isRequired,
};

export default Result;
