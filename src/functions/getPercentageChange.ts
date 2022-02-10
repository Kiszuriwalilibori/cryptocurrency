import { NotAvailable } from '../types';

/**
 * calculate percentchange of two numbers (or strings, see return)
 * @param current
 * @param historical
 * @returns string being representation of changes with plus/minus and percents mark. In case of being called with string return is 'n/a'string
 */
function getPercentChange(current: number, historical: number | NotAvailable): string | NotAvailable {
    let outcome: string = '';
    if (typeof historical === 'number') {
        const historicalPrice = historical as number;
        let change = (100 * (current - historicalPrice)) / historicalPrice;
        const change_string = change.toLocaleString('pl-PL', {
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        if (change === 0) outcome = 'no change';
        else if (change > 0) outcome = `+${change_string}%`;
        else if (change < 0) outcome = `${change_string}%`;
    } else outcome = 'n/a';
    return outcome;
}
export default getPercentChange;
