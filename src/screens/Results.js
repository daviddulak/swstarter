import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {H1, ResultItem, StandardSubText, ScreenContainer} from '../ui-kit';

export class Results extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H1 withHorizontalRule>Results</H1>
          <StandardSubText>Searching…</StandardSubText>
          <ResultItem onPress={() => {}}>Obi-wan</ResultItem>
          <ResultItem onPress={() => {}}>Obi-wan</ResultItem>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
