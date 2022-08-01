const numberToReversedDigits = number => number.toString().split('').reverse().map(e => parseInt(e));

module.exports = numberToReversedDigits;
