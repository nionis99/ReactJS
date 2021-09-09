module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`],
};