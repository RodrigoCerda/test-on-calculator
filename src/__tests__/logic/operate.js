import operate from "../../logic/operate";

describe("operate", () => {
  it("suma", () => {
    const result = operate("2", "3", "+");
    expect(result).toBe("5");
  });
  it("test div / 0", () => {
    const result = operate("2", "0", "÷");
    expect(result).toBe("0")
  });
});
