import {floatResult} from '../methods/floatResult';

export function add(firstConjunction, secondConjunction) {
    let result;

    result = {
        'sum': floatResult(firstConjunction + secondConjunction),
        'operationSign': ' + ',
        'operationName': 'Adding',
        'firstConjunction': firstConjunction,
        'secondConjunction': secondConjunction
    };

    return result;
}

console.log(add(11, 11));