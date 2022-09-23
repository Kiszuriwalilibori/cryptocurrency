import "./_CurrentPrice.scss";

/**
 * Displays cell with current cryptocurrency price
 * @param props object with current cryptocurrency price data
 * @returns component
 */
interface Props {
  currentPrice: { [key: string]: string };
}

const CurrentPrice = (props: Props) => {
  const { currentPrice } = props;

  return (
    <div className="cell">
      <div className="value">{Object.values(currentPrice)[0]}</div>
      <div className="name">{Object.keys(currentPrice)[0]}</div>
    </div>
  );
};

export default CurrentPrice;

/**
 * todo jakieś zabezpieczenie przed superdługą ceną patrze PetroDolar
 */
