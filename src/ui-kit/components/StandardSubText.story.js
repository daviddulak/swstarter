import React from 'react';
import {CenterView} from './CenterView.js';

import {StandardSubText} from './StandardSubText.js';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number, color} from '@storybook/addon-knobs';

storiesOf('StandardSubText', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StandardSubText>{text('Text:', 'Sub Text')}</StandardSubText>
  ));
