module.exports = {
  displayName: 'memorio',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' }
    ]
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/react-bootstrap/',
    '<rootDir>/node_modules/react-i18next/'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/memorio'
};
