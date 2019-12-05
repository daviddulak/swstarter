import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../Colors';

class StandardSubText extends PureComponent {
  render() {
    return (
      <Text style={[styles.style, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

StandardSubText.propTypes = {};

StandardSubText.defaultProps = {};

const styles = StyleSheet.create({
  style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: Colors.grey.default,
  },
});

export {StandardSubText};
