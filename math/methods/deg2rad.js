let round = require('../methods/round');

exports.deg2rad = function(degrees) {
    return round.round(degrees * 0.0174532925);
};