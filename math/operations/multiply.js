exports.multiple = function(firstMultiplier, secondMultiplier) {
    let result = {
        'product': firstMultiplier * secondMultiplier,
        'operationSign': ' * ',
        'operationName': 'Multiplying',
        'firstMultiplier': firstMultiplier,
        'secondMultiplier': secondMultiplier
    };

    return result;
};