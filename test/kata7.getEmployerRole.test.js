const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    {
      name: "Satti",
      role: "Developer"
    },
    {
      name: "Jenny",
      role: "Sales Associate"
    },
    {
      name: "Javid",
      role: "Human Recommended Reading Assistant"
    }
  ];

  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employees)).toBe(
      "Human Recommended Reading Assistant"
    );
    expect(getEmployerRole("Satti", employees)).toBe("Developer");
  });
});
