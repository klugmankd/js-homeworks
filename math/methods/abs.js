import {floatResult} from 'floatResult';

export function abs(number) {
    let result = 0;
    if (number > 0) {
        result = number;
    } else {
        result = -1 * number;
    }

    return floatResult(result);
}

console.log(abs(-3));