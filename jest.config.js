module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.{spec,test}.ts(x)?'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '/infra/',
    '/.circleci/',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.styles.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '\\.svg': '<rootDir>/.jest/svgr.js',
  },
};
