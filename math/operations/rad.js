import {deg2rad} from '../methods/deg2rad';

export function rad(degrees) {
    let result = {
        'share': deg2rad(degrees),
        'operationName': 'Degrees to Radians',
        'degrees': degrees,
    };

    return result;
}