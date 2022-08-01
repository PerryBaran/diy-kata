const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns string Yes when boolean is true', () => {
    expect(booleanToWord(true)).toBe('Yes');
  });

  it('return string No when boolean is false', () => {
    expect(booleanToWord(false)).toBe('No')
  })
});
