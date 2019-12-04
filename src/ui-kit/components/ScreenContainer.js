import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, View, Platform, Dimensions} from 'react-native';
import {Header} from './Header';
import {Colors} from '../Colors';

class ScreenContainer extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.inner}>
            {this.props.children}
          </View>
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
  inner: {
    minHeight: Platform.OS === 'android' ? Dimensions.get("window").height - 140 : Dimensions.get("screen").height - 180,
    marginBottom: Platform.OS === 'android' ? 60 : 0,
  },
});

export {ScreenContainer};
