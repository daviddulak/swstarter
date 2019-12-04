import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  StandardText,
  RadioItem,
  ScreenContainer,
  StandardTextInput,
  StandardButton,
} from '../ui-kit';

export class Search extends Component {
  handleTextFieldChange = text => {
    console.log(text);
  };
  handleTextFieldSubmit = () => {
    console.log('submit');
  };
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <View style={styles.contentAboveContainer}>
            <StandardText>What are you searching for ?</StandardText>
            <View style={styles.radioContainer}>
              <RadioItem selected>People</RadioItem>
              <RadioItem>Movies</RadioItem>
            </View>
            <StandardTextInput
              onChange={this.handleTextFieldChange}
              onSubmit={this.handleTextFieldSubmit}
              returnKeyType={'search'}
            />
          </View>
          <StandardButton onPress={this.handleTextFieldSubmit} disabled>
            Standard
          </StandardButton>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentAboveContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
  },
});
