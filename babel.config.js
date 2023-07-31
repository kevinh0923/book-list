module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          '@assets': ['./assets'],
          '@api': ['./src/api'],
          '@components': ['./src/components'],
          '@screens': ['./src/screens'],
          '@navigation': ['./src/navigation'],
          '@types': ['./src/types'],
          '@settings': ['./src/setting'],
          '@theme': ['./src/theme'],
        },
      },
    ],
  ],
};
