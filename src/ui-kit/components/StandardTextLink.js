import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {StandardText} from './StandardText';
import {Colors} from '../Colors';

class StandardTextLink extends PureComponent {
  render() {
    return (
      <StandardText {...this.props} style={[styles.style, this.props.style]}>
        {this.props.children}
      </StandardText>
    );
  }
}

StandardTextLink.propTypes = {};

StandardTextLink.defaultProps = {};

const styles = StyleSheet.create({
  style: {
    color: Colors.blue.default,
  },
});

export {StandardTextLink};
