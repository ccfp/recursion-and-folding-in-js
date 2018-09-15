const reverse = require("./reverse")

describe("reverse", () => {
  it("should reverse an array", () => {
    const nums = [1, 2, 3]
    expect(reverse(nums)).toEqual([3, 2, 1])
  })
})
