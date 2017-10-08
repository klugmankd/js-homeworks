exports.subtract = function(reduced, negative) {
    let result = {
        'difference': reduced - negative,
        'operationSign': ' - ',
        'operationName': 'Subtracting',
        'reduced': reduced,
        'negative': negative
    };

    return result;
};