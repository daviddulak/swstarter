import {getStorybookUI, configure} from '@storybook/react-native';
import '@storybook/addon-ondevice-knobs/register';

configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI();

export default StorybookUI;
