import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  StandardText,
  StandardTextLink,
  H1,
  H2,
  StandardButton,
  ScreenContainer,
} from '../ui-kit';

export class PersonDetail extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H1>Obi-wan</H1>
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
          <StandardButton onPress={this.handleTextFieldSubmit}>
            Back To Search
          </StandardButton>
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
