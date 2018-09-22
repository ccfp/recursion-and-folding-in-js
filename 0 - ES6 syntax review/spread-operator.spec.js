const { combinedGroceryList, expected } = require("./spread-operator")

describe("combinedGroceryList", () => {
  it("is a combination of the grocery lists", () => {
    expect(combinedGroceryList).toEqual(expected)
  })
})
