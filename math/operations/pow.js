import {floatResult} from '../methods/floatResult';
import {pow} from '../methods/pow';

export function powNumber(number, power) {
    let result;

    result = {
        'resultNumber': pow(number, power),
        'operationSign': ' ^ ',
        'operationName': 'Powering',
        'number': number,
        'power': power
    };

    return floatResult(result);
}