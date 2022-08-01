const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    it('returns an array of human years, cat years and dog years', () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    });

    it('works for 1 human year', () => {
        expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
    });

    it('works for 2 human years', () => {
        expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
    })

    it('work for 0 human years', () => {
        expect(humanCatDogYears(0)).toStrictEqual([0, 0, 0])
    });
});
