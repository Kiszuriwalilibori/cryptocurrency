import { baseCurrencyType } from './types';

export const initial = {
    intervalMs: 3000,
    currencyBase: '' as baseCurrencyType,
    currencyCrypto: {
        value: '',
        label: '',
        image: '',
    },
};
