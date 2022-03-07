const movieList = require("./MovieList");

test("getName should get the name", () => {
  expect(movieList.getName({ name: "foo" })).toBe("foo");
});

test("makeEpisodeCode should work in simple case", () => {
  expect(movieList.makeEpisodeCode({ season: 1, number: 1 })).toBe("S01E01");
});

test("makeEpisodeCode should work for episode 10 and above", () => {
  expect(movieList.makeEpisodeCode({ season: 1, number: 10 })).toBe("S01E10");
});

test("makeEpisodeCode should work for season 10 and above", () => {
  expect(movieList.makeEpisodeCode({ season: 11, number: 1 })).toBe("S11E01");
});

test("makeEpisodeCode should work for season and episode 10 and above", () => {
  expect(movieList.makeEpisodeCode({ season: 11, number: 11 })).toBe("S11E11");
});

test("makeEpisodeCode should work for season 10 exactly", () => {
  expect(movieList.makeEpisodeCode({ season: 10, number: 1 })).toBe("S10E01");
});
