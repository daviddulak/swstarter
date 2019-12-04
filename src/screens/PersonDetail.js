import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {swapi} from '../services/swapi';
import {
  StandardText,
  StandardTextLink,
  H1,
  H2,
  StandardButton,
  ScreenContainer,
} from '../ui-kit';

export class PersonDetail extends Component {
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
      .getPerson(this.props.id)
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
          <H1>{this.state.item.name}</H1>
          <View style={styles.section}>
            <H2 withHorizontalRule>Details</H2>
            <StandardText>
              Birth Year: 24BBY Gender: male Eye Color: brown Hair Color: black
              Height: 183 Mass: 84
            </StandardText>
          </View>
          <View style={styles.section}>
            <H2 withHorizontalRule>Movies</H2>
            <StandardTextLink>Return of the Jedi</StandardTextLink>
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
