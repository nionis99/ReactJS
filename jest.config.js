module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`],
};
