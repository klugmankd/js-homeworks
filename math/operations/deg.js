import {rad2deg} from '../methods/rad2deg';

export function deg(radians) {
    let result = {
        'share': rad2deg(radians),
        'operationName': 'Radians to degrees',
        'radians': radians,
    };

    return result;
}