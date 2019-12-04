/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Search} from '../screens/Search';
import {StoryBook} from '../screens/StoryBook';
import {Results} from '../screens/Results';
import {FilmDetail} from '../screens/FilmDetail';
import {PersonDetail} from '../screens/PersonDetail';
import {swapi} from '../services/swapi';

class App extends Component {
  componentDidMount() {
    swapi.getAllPeople().then(response => {
      console.log(response);
    });
    swapi.getPerson(1).then(response => {
      console.log(response);
    });
    swapi.getAllFilms().then(response => {
      console.log(response);
    });
    swapi.getFilm(1).then(response => {
      console.log(response);
    });
  }
  render() {
    return <StoryBook />;
  }
}

export default App;
