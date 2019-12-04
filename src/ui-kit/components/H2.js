import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors';

class H2 extends PureComponent {
  render() {
    return (
      <>
        <Text {...this.props} style={[styles.style, this.props.style]}>
          {this.props.children}
        </Text>
        {this.props.withHorizontalRule ? (
          <View style={styles.horizontalRule} />
        ) : null}
      </>
    );
  }
}

H2.propTypes = {
  withHorizontalRule: PropTypes.bool,
};

H2.defaultProps = {
  withHorizontalRule: false,
};

const styles = StyleSheet.create({
  style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: Colors.grey.dark,
  },
  horizontalRule: {
    borderBottomColor: Colors.grey.default,
    borderBottomWidth: 1,
    paddingBottom: 9.5,
    marginBottom: 9.5,
  },
});

export {H2};
