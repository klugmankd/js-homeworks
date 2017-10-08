export function ceil(number) {
    if (number % 1 === 0) {
        return parseInt(number);
    } else {
        if (number % 1 > 0) {
            number++;
            return parseInt(number);
        }
    }
}