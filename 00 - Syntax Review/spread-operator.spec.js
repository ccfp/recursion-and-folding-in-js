const { combinedGroceryList, expected } = require("./spread-operator")

describe("Spread operator exercise", () => {
  it("combines the grocery lists", () => {
    expect(combinedGroceryList).toEqual(expected)
  })
})
