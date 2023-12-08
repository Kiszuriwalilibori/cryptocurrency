import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { BaseCurrency } from "types";
import { BaseCurrencyForm, Legend } from "../styles";

interface BaseCurrencyChoiceType {
    currencyBase: BaseCurrency | null;
    setCurrencyBase: (arg0: BaseCurrency) => void;
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
        setCurrencyBase(event.target.value as BaseCurrency);
    };

    return (
        <BaseCurrencyForm>
            <Legend> Waluta odniesienia</Legend>
            <RadioGroup aria-label="currency" name="currency" value={currencyBase} onChange={handleChange}>
                <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
                <FormControlLabel value="USD" control={<Radio />} label="USD" />
                <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
            </RadioGroup>
        </BaseCurrencyForm>
    );
};

export default BaseCurrencySelectForm;
