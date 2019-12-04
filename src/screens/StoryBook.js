import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import StorybookUI from '../ui-kit/storybook';

export class StoryBook extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StorybookUI />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
