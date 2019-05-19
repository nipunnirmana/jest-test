const chunkArray = require("./chunkArray");

test("Chunk Array Exists ?", () => {
  expect(chunkArray).toBeDefined;
});

test("Breaks into 3 chunks", () => {
  expect(chunkArray([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2], [3, 4], [5, 6]]);
});
