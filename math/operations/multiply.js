import {floatResult} from '../methods/floatResult';

export function multiply(firstMultiplier, secondMultiplier) {
    let result = {
        'product': floatResult(firstMultiplier * secondMultiplier),
        'operationSign': ' * ',
        'operationName': 'Multiplying',
        'firstMultiplier': firstMultiplier,
        'secondMultiplier': secondMultiplier
    };

    return floatResult(result);
}