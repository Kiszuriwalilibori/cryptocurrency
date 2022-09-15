import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import { MyFormControl } from "./style";
import { BaseCurrency } from "types/types";

interface BaseCurrencyChoiceType {
  currencyBase: BaseCurrency;
  setCurrencyBase: Function;
}
/**
 * Creates form which alows choise of base currency
 * @param currencyBase base currency
 * @param setCurrencyBase: function which sets chosen base currency
 * @returns form component with radiogroup
 */

const BaseCurrencySelectForm = (props: BaseCurrencyChoiceType): JSX.Element => {
  const { currencyBase, setCurrencyBase } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyBase(event.target.value);
  };

  return (
    <MyFormControl>
      <FormLabel component="legend">Waluta odniesienia</FormLabel>
      <RadioGroup aria-label="currency" name="currency" value={currencyBase} onChange={handleChange}>
        <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
        <FormControlLabel value="USD" control={<Radio />} label="USD" />
        <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
      </RadioGroup>
    </MyFormControl>
  );
};

export default BaseCurrencySelectForm;
