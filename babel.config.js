module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-react'],
  plugins: [
    'transform-inline-environment-variables',
    'react-native-reanimated/plugin',
  ],
};
