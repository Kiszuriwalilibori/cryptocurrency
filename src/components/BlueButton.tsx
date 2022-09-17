interface Props {
  classes?: string;
  isEnabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  textContent?: string;
}

const BlueButton = (props: Props) => {
  const { classes = "currencySettingButton enabled", isEnabled = true, onClick = () => {}, textContent = "", ...rest } = props;

  return (
    <button className={classes} onClick={onClick} disabled={!isEnabled}>
      {textContent}
    </button>
  );
};

export default BlueButton;

// return (
//     <button
//       className={classes}
//       disabled={!isEnabled}
//       onClick={() => {
//         setCurrencyBase(currencyBase);
//         setCurrencyCrypto(currencyCrypto);
//         if (pathToResults) history.push(pathToResults);
//       }}
//     >
//       Pokaż kurs
//     </button>
//   );
// };

// function RectangleButton(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
//   const {
//     children,
//     family = 'neutral',
//     level = 'solid',
//     size = 'auto',
//     className = '',
//     ...rest
//   } = props;

//   return (
//     <button
//       className={`Button rectangle ${family} ${level} ${size} ${className}`}
//       ref={ref}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

// // export default forwardRef(RectangleButton);
