const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toBe('Bart, Lisa & Maggie')
  });

  it('works for array length of 1', () => {
    expect(joinNames([{name: 'Bart'}])).toBe('Bart');
  });

  it('works for array length of 2', () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}])).toBe('Bart & Lisa');
  });

  it('works for longer arrays', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }, {
      name: 'Homer'
    }, {
      name: 'Marge'
    }])).toBe('Bart, Lisa, Maggie, Homer & Marge')
  })
});
