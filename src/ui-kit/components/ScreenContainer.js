import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header} from './Header';
import {Colors} from '../Colors';

class ScreenContainer extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.contentContainer}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

ScreenContainer.propTypes = {};

ScreenContainer.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  contentContainer: {
    height: '100%',
    padding: 30,
  },
});

export {ScreenContainer};
