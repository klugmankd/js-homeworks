import {floatResult} from '../methods/floatResult';

export function divide(divide, divider) {
    let result = {
        'share': floatResult(divide / divider),
        'operationSign': ' / ',
        'operationName': 'Dividing',
        'divide': divide,
        'divider': divider
    };

    return floatResult(result);
}