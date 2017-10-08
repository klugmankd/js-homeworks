exports.add = function(firstConjunction, secondConjunction) {
    let result;

    result = {
        'sum': firstConjunction + secondConjunction,
        'operationSign': ' + ',
        'operationName': 'Adding',
        'firstConjunction': firstConjunction,
        'secondConjunction': secondConjunction
    };

    return result;
};
