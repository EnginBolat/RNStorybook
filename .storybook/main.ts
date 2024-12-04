import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@chromatic-com/storybook',
    '@storybook/addon-react-native-web'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autoDocs: true,
  }
};

export default main;
