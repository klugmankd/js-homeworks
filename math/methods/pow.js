import {floatResult} from 'floatResult';

export function pow(number, power) {
    let result = 1;
    if (power < 0) {
        power = -1 * power;
        for (let iteration = 1; iteration <= power; iteration++) {
            result *= number;
        }
        result = 1 / result;
    } else if (power === 0 ) {
        result = 1;
    } else {
        for (let iteration = 1; iteration <= power; iteration++) {
            result *= number;
        }
    }
    return floatResult(result);
}