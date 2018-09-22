// You've got two grocery lists
const groceryList1 = ["eggs", "bacon", "avocado"]
const groceryList2 = ["cheese", "spinach", "tofu"]

// Combine the lists into a single array using the spread operator
// and add "tomatoes" in between them
const combinedGroceryList = ["tomatoes", ...groceryList1, ...groceryList2]

combinedGroceryList

// This is what it should end up looking like:
const expected = [
  "eggs",
  "bacon",
  "avocado",
  "tomatoes",
  "cheese",
  "spinach",
  "tofu"
]

module.exports = { combinedGroceryList, expected }
