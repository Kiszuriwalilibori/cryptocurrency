import React from "react";
interface Props {
  classes?: string;
  isEnabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label?: string;
}

const BlueButton = (props: Props) => {
  const { classes = "currencySettingButton enabled", isEnabled = true, onClick = () => {}, label = "", ...rest } = props;
  const baseClass = "currencySettingButton";

  return (
    <button className={classes} onClick={onClick} disabled={!isEnabled}>
      {label}
    </button>
  );
};

export default BlueButton;
