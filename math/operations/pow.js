let pow = require('../methods/pow');

function powNumber(number, power) {
    let result;

    result = {
        'resultNumber': pow.pow(number, power),
        'operationSign': ' ^ ',
        'operationName': 'Powering',
        'number': number,
        'power': power
    };

    return result;
}