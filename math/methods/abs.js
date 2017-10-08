exports.abs = function (number) {
    let result = 0;
    if (number > 0) {
        result = number;
    } else {
        result = -1 * number;
    }

    return result;
};
