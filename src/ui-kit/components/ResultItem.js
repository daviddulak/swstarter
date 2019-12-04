import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {StandardButton} from './StandardButton';
import {H2} from './H2';
import {Colors} from '../Colors';

class ResultItem extends PureComponent {
  render() {
    return (
      <View {...this.props} style={[styles.style, this.props.style]}>
        <H2 style={styles.heading}>{this.props.children}</H2>
        <StandardButton onPress={this.props.onPress}>
          See Details
        </StandardButton>
      </View>
    );
  }
}

ResultItem.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

ResultItem.defaultProps = {
  title: '',
  onPress: () => {},
};

const styles = StyleSheet.create({
  style: {
    borderBottomColor: Colors.grey.default,
    borderBottomWidth: 1,
    paddingBottom: 19.5,
    marginBottom: 13.5,
    paddingTop: 6,
  },
  heading: {
    paddingBottom: 15,
  },
});

export {ResultItem};
