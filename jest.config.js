/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|setup).[tj]s?(x)"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};