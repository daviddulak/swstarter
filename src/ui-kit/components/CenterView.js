import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

class CenterView extends PureComponent {
  render() {
    return (
      <View
        style={[styles.main, {backgroundColor: this.props.backgroundColor}]}>
        {this.props.children}
      </View>
    );
  }
}

CenterView.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};

CenterView.defaultProps = {
  children: null,
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {CenterView};
