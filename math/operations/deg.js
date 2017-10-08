let rad2deg = require('../methods/rad2deg');

exports.deg = function(radians) {
    let result = {
        'share': rad2deg.rad2deg(radians),
        'operationName': 'Radians to degrees',
        'radians': radians,
    };

    return result;
};