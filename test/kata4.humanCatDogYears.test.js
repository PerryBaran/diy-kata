const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    it('returns an array comntaing [human years, cat years, dog years] when passed human years', () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    })
});
