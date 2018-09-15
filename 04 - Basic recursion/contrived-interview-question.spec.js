const { flatten } = require("./contrived-interview-question")

describe("flatten", () => {
  it("flattens an arbitrarily-nested array", () => {
    const nestedArr = [[1, [2, 3, [4]], [5]], 6]
    const expected = [1, 2, 3, 4, 5, 6]
    expect(flatten(nestedArr)).toEqual(expected)
  })
})
