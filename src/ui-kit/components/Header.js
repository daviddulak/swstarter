import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../Colors';

class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>SWStarter</Text>
      </View>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    height: 57,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.green.default,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.green.default,
  },
});

export {Header};
