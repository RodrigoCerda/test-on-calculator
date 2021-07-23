import calculate from "../../logic/calculate";

describe("calculate", () => {
  it("press =", () => {
    const result = calculate({ total: "2", next: "3", operation: "+" }, "=");
    expect(result).toStrictEqual({ total: "5", next: null, operation: null });
  });
});
