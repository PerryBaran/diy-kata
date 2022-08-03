const numberToReversedDigits = number =>
  number
    .toString()
    .split("")
    .reverse()
    .map(e => Number(e));

module.exports = numberToReversedDigits;
