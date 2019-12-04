import React from 'react';
import {CenterView} from './CenterView.js';

import {StandardTextLink} from './StandardTextLink.js';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number, color} from '@storybook/addon-knobs';

storiesOf('StandardTextLink', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StandardTextLink>{text('Text:', 'Text Link')}</StandardTextLink>
  ));
