let deg2rad = require('../methods/deg2rad');

exports.rad = function(degrees) {
    let result = {
        'share': deg2rad.deg2rad(degrees),
        'operationName': 'Degrees to Radians',
        'degrees': degrees,
    };

    return result;
};