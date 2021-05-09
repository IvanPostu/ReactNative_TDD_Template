module.exports = {
  roots: ['<rootDir>/__tests__'],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/__tests__/jest-setup.js'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
};
