let ceil = require('./ceil.js');
let floor = require('./floor.js');

exports.round = function (number) {
    if (number % 1 < 0.5) {
        return floor.floor(number)
    } else {
        return ceil.ceil(number)
    }
};