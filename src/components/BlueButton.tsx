import React from "react";
interface Props {
  classes?: string;
  isEnabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label?: string;
}

const BlueButton = (props: Props) => {
  const { classes = "enabled", isEnabled = true, onClick = () => {}, label = "", ...rest } = props;
  const baseClassName = "currencySettingButton";

  return (
    <button className={`${baseClassName} ${classes}`} onClick={onClick} disabled={!isEnabled}>
      {label}
    </button>
  );
};

export default BlueButton;
