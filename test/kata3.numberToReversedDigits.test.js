const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1058)).toStrictEqual([8, 5, 0, 1]);
    expect(numberToReversedDigits(1234567890)).toStrictEqual([
      0,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]);
  });
});
