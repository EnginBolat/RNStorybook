import React from 'react';
import { View } from 'react-native';
const App = () => {
  return <View style={{ backgroundColor: 'blue', flex: 1 }} />;
};
let AppEntryPoint = App;

console.log('STORYBOOK:', process.env.STORYBOOK);
if (process.env.STORYBOOK) {
  //
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
