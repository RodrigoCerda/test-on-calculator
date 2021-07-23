import isNumber from "../../logic/isNumber";

describe("isNumber", () => {
  it("ok", () => {
    const result = isNumber("6")
    expect(result).toBeTruthy()
  })
})