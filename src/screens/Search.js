import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  StandardText,
  RadioItem,
  ScreenContainer,
  StandardTextInput,
  StandardButton,
} from '../ui-kit';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false,
      query: '',
      queryType: 'people',
    };
    console.log(this);
    if (this.props.componentId) {
      Navigation.events().bindComponent(this);
    }
  }

  static options(passProps) {
    return {
      topBar: {
        leftButtons: {
          id: 'stories',
          icon: require('../ui-kit/assets/gears.png'),
        },
      },
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'stories') {
      Navigation.push(this.props.componentId, {component: {name: 'StoryBook'}});
    }
  }

  handleTextFieldChange = text => {
    this.setState({
      hasValue: text && text !== '',
      query: text,
    });
  };

  handleTextFieldSubmit = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Results',
        passProps: {query: this.state.query, queryType: this.state.queryType},
      },
    });
  };

  handlePeopleRadioChange = newVal => {
    if (newVal) {
      this.setState({
        queryType: 'people',
      });
    }
  };

  handleFilmsRadioChange = newVal => {
    if (newVal) {
      this.setState({
        queryType: 'films',
      });
    }
  };

  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <View style={styles.container}>
            <View style={styles.contentAboveContainer}>
              <StandardText>What are you searching for ?</StandardText>
              <View style={styles.radioContainer}>
                <RadioItem
                  onChange={this.handlePeopleRadioChange}
                  selected={this.state.queryType === 'people'}>
                  People
                </RadioItem>
                <RadioItem
                  onChange={this.handleFilmsRadioChange}
                  selected={this.state.queryType === 'films'}>
                  Movies
                </RadioItem>
              </View>
              <StandardTextInput
                placeholder={
                  this.state.queryType === 'people'
                    ? 'e.g. Chewbacca, Yoda'
                    : 'e.g. A New Hope'
                }
                onChange={this.handleTextFieldChange}
                onSubmit={this.handleTextFieldSubmit}
                returnKeyType={'search'}
              />
            </View>
            <StandardButton
              onPress={this.handleTextFieldSubmit}
              disabled={!this.state.hasValue}>
              Search
            </StandardButton>
          </View>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentAboveContainer: {
    paddingBottom: 30,
  },
  radioContainer: {
    flexDirection: 'row',
  },
});
