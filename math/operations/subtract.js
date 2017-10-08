import {floatResult} from '../methods/floatResult';

export function subtract(reduced, negative) {
    let result = {
        'difference': floatResult(reduced - negative),
        'operationSign': ' - ',
        'operationName': 'Subtracting',
        'reduced': reduced,
        'negative': negative
    };

    return floatResult(result);
}