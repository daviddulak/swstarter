import React from 'react';
import {CenterView} from './CenterView.js';

import {StandardButton} from './StandardButton.js';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number, color} from '@storybook/addon-knobs';

storiesOf('StandardButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StandardButton disabled={boolean('isDisabled:', false)}>
      {text('Text:', 'Button')}
    </StandardButton>
  ));
