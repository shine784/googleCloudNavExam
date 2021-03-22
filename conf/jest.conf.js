const path = require('path');

module.exports = {
  roots: ['<rootDir>/../tests'],
  modulePaths: ['<rootDir>/../src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        configFile: path.resolve(__dirname, 'babel.conf.js'),
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(css|less|sass|scss)$": "<rootDir>../__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/..__mocks__/fileMock.js"
  },
};
