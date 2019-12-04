/**
 * @format
 */

import 'react-native';
import React from 'react';

import {swapi} from '../src/services/swapi';

import { Search } from '../src/screens/Search';
import { FilmDetail } from '../src/screens/FilmDetail';
import { PersonDetail } from '../src/screens/PersonDetail';
import { Results } from '../src/screens/Results';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Search renders correctly', () => {
  renderer.create(<Search />);
});

it('Results renders correctly', () => {
  renderer.create(<Results />);
});

it('FilmDetail renders correctly', () => {
  renderer.create(<FilmDetail />);
});

it('PersonDetail renders correctly', () => {
  renderer.create(<PersonDetail />);
});
