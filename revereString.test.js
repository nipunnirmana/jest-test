const reverseString = require("./reverseString");

beforeEach(() => {
  console.log("Database inited");
});

afterEach(() => {
  console.log("Database Closed");
});

describe("Connecting to database", () => {
  beforeEach(() => {
    console.log("Connecting to the db");
  });

  test("Reverse String functions exists", () => {
    expect(reverseString).toBeDefined();
  });
});

test("Reversed String should be olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
