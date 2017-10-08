import {round} from 'round';

export function floatResult(result) {
    if ((result.toFixed(3) * 1000) % 10 === 0) {
        return result.toFixed(2)
    } else if((result.toFixed(2) * 100) % 100 === 0) {
        return result.toFixed(1)
    } else if (result % 1 === 0){
        return round(result);
    } else {
        return result.toFixed(3);
    }
}