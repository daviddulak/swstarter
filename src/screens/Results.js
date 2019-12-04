import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {swapi} from '../services/swapi';
import {H1, ResultItem, StandardSubText, ScreenContainer} from '../ui-kit';
import {Common} from '../utils/Common';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchComplete: false,
      results: [],
    };
  }
  handlePressDetails = (url) => () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: this.props.queryType === 'people' ? 'PersonDetail' : 'FilmDetail',
        passProps: {id: Common.idFromUrl(url)},
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
          <StandardSubText style={styles.centeredText}>Searching…</StandardSubText>
        </View>
      );
    } else if (this.state.results.length === 0) {
      return (
        <View style={styles.infoContainer}>
          <StandardSubText style={styles.centeredText}>
            There are zero matches. Use the form to search for People or Movies.
          </StandardSubText>
        </View>
      );
    } else {
      return (
        <>
          {this.state.results.map((item, index) => {
            const title = this.props.queryType === 'people' ? item.name : item.title;
            return <ResultItem onPress={this.handlePressDetails(item.url)} key={`item-${index}`}>{title}</ResultItem>;
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
});
