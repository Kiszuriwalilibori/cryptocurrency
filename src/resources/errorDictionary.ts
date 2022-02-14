/**
 * Not in use. perhaps in the future
 */

import { GenericStringObject } from '../../src/types';

let errorDictionary: GenericStringObject = {
    404: 'Not found',
};

errorDictionary = new Proxy(errorDictionary, {
    get(target, phrase: string) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    },
});

export default errorDictionary;
