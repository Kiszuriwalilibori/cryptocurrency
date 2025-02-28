import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { CurrencyBase } from "types";
import { BaseCurrencyForm, Legend } from "../styles";
import { useConvertibleCryptos } from "store/convertibleCryptos";

interface BaseCurrencyChoiceType {
    currencyBase: CurrencyBase | null;
    setCurrencyBase: (arg0: CurrencyBase) => void;
}
/**
 * Creates form which alows choise of base currency
 * @param currencyBase base currency
 * @param setCurrencyBase: function which sets chosen base currency
 * @returns form component with radiogroup
 */

const BaseCurrencySelectForm = (props: BaseCurrencyChoiceType): JSX.Element => {
    const { currencyBase, setCurrencyBase } = props;
    const convertibles = useConvertibleCryptos.use.convertibles();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrencyBase(event.target.value as CurrencyBase);
    };

    return (
        <BaseCurrencyForm disabled={!(convertibles && convertibles.length)}>
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
