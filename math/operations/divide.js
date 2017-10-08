
exports.divide = function(divide, divider) {
    let result = {
        'share': divide / divider,
        'operationSign': ' / ',
        'operationName': 'Dividing',
        'divide': divide,
        'divider': divider
    };

    return result;
};