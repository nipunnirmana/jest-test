const functions = require("./functions");

test("num1 + num2 should be 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Not to be 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(false)).toBeFalsy();
});

test("User name should be Nipun Fernando", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Nipun",
    lastName: "Fernando"
  });
});

test("Should be under 1600", () => {
  const one = 800;
  const two = 800;
  expect(one + two).toBeLessThanOrEqual(1600);
});

test("There is no I in Team", () => {
  expect("team").not.toMatch(/i/i);
});

test("Admin should be a user", () => {
  const users = ["a", "b", "admin"];
  expect(users).toContain("admin");
});

test("user should be Lenne", async () => {
  const fetchedUserName = await functions.getUser();
  expect(fetchedUserName.name).toEqual("Leanne Graham");
});
