// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'html', 'lcov', 'clover'],
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/__mocks__/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/assetsTransformer.js',
  },
  //   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
