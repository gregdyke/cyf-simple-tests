const movieList = require("./MovieList");

test("getName to get the name", () => {
  expect(movieList.getName({ name: "foo" })).toBe("foo");
});
