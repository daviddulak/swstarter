import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {swapi} from '../services/swapi';
import {
  StandardText,
  StandardTextLink,
  H1,
  H2,
  ScreenContainer,
  StandardButton,
} from '../ui-kit';

export class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }
  handleBackToSearch = () => {
    Navigation.popToRoot(this.props.componentId);
  }
  componentDidMount() {
    swapi
      .getFilm(this.props.id)
      .then(response => {
        console.log(response);
        this.setState({
          item: response,
        });
      })
      .catch(response => {
        console.log(response);
      });
  }
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H1>{this.state.item.title}</H1>
          <View style={styles.section}>
            <H2 withHorizontalRule>Opening Crawl</H2>
            <StandardText>{this.state.item.opening_crawl}</StandardText>
          </View>
          <View style={styles.section}>
            <H2 withHorizontalRule>Characters</H2>
            <StandardTextLink>
              Luke Skywalker, Jabba Desiliijiic Tiure, Wedge Antilles, Jek Tono
              Porkins, Raymus Antilles, C-3PO, R2-D2, Darth Vader, Bib Fortuna,
              Leia Organa, Owen Lars, Beru Whitesun Lars, R5-D4, Biggs
              Darklight, Obi-Wan Kenobi, Wilhuff Tarkin, Chewbacca, Han Solo
            </StandardTextLink>
          </View>
          <View style={styles.section}>
            <StandardButton onPress={this.handleBackToSearch}>
              Back To Search
            </StandardButton>
          </View>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 30,
  },
});
