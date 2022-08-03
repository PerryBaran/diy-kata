const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
  });

  test("is singular for 1 hour", () => {
    expect(reachDestination(1, 1)).toBe("I should be there in 1 hour");
  });
});
