module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.ts$",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
};
