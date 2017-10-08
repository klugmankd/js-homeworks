let round = require('./round');

exports.rad2deg = function(radians) {
    return round.round(radians * 57.2957795);
};