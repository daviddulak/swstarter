import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {swapi} from '../services/swapi';
import {H1, ResultItem, StandardSubText, ScreenContainer} from '../ui-kit';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchComplete: false,
      results: [],
    };
  }
  handlePressDetails = (url) => () => {
    let parts = url.split('/');
    let id = parts[parts.length - 2];
    Navigation.push(this.props.componentId, {
      component: {
        name: this.props.queryType === 'people' ? 'PersonDetail' : 'FilmDetail',
        passProps: {id: id},
      },
    });
  };
  componentDidMount() {
    swapi
      .search(this.props.queryType, this.props.query)
      .then(response => {
        this.setState({
          searchComplete: true,
          results: response.results,
        });
      })
      .catch(response => {
        console.log(response);
        this.setState({
          searchComplete: true,
        });
      });
  }
  renderResults() {
    if (!this.state.searchComplete) {
      return (
        <View style={styles.infoContainer}>
          <StandardSubText>Searching…</StandardSubText>
        </View>
      );
    } else if (this.state.results.length === 0) {
      return (
        <View style={styles.infoContainer}>
          <StandardSubText>
            There are zero matches. Use the form to search for People or Movies.
          </StandardSubText>
        </View>
      );
    } else {
      return (
        <>
          {this.state.results.map((item, index) => {
            return <ResultItem onPress={this.handlePressDetails(item.url)} key={`item-${index}`}>{item.name}</ResultItem>;
          })}
        </>
      );
    }
  }
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H1 withHorizontalRule>Results</H1>
          {this.renderResults()}
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
