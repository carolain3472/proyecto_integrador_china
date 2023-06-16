module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/test/style-mock.js",
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
