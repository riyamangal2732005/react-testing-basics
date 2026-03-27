export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    // This tells Jest to use Babel to translate your modern code
    '^.+\\.(js|jsx)$': 'babel-jest', 
  },
};