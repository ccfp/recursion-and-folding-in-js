const sum = require("./sum")

describe("sum", () => {
  it("should sum an array of numbers", () => {
    const nums = [1, 2, 2, 10]
    expect(sum(nums)).toBe(15)
  })
})
