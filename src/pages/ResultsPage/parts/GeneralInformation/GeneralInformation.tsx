import { memo } from "react";
import "./_generalInformation.scss";

interface Props {
  name: string;
}
/**
 * Renders general information about cryptocurrency
 * @param {string} name cryptocurrency nam
 * @returns memoised component
 */
const GeneralInfo = memo((props: Props) => {
  const { name } = props;
  return (
    <div className="GeneralInformation">
      <div className="title">{name}</div>
      <div className="foundation">{`${name} foundation`}</div>
      <div className="altcoins">Altcoins - hightest growth</div>
    </div>
  );
});

export default GeneralInfo;
