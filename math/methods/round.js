import {floor} from 'floor';
import {ceil} from 'ceil';

export function round(number) {
    if (number % 1 < 0.5) {
        return floor(number)
    } else {
        return ceil(number)
    }
}