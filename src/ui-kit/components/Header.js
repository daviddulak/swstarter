import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../Colors';

class Header extends PureComponent {
  render() {
    return <View pointerEvents={'none'} style={styles.container} />;
  }
}

Header.propTypes = {};

Header.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: Colors.green.default,
  },
});

export {Header};
