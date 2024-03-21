module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
  testMatch: ["**/*.spec.ts"],
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    "\\.ts$": "ts-jest",
  },
};
