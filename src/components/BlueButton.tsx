import React from "react";
import "./_button.scss";

interface Props {
  classes?: string;
  isEnabled?: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label?: string;
}

const BlueButton = (props: Props) => {
  const { classes = "enabled", isEnabled = true, clickHandler = () => {}, label = "" } = props;
  const baseClassName = "BlueButton";

  return (
    <button className={`${baseClassName} ${classes}`} onClick={clickHandler} disabled={!isEnabled}>
      {label}
    </button>
  );
};

export default BlueButton;
