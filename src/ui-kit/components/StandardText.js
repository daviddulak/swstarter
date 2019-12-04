import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../Colors';

class StandardText extends PureComponent {
  render() {
    return (
      <Text {...this.props} style={[styles.style, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

StandardText.propTypes = {};

StandardText.defaultProps = {};

const styles = StyleSheet.create({
  style: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: Colors.grey.dark,
  },
});

export {StandardText};
