import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Colors} from '../Colors';

class StandardButton extends PureComponent {
  _onPressButton = () => {
    this.props.onPress();
  };
  renderVisual() {
    return (
      <View
        style={[
          styles.buttonContainer,
          this.props.disabled && styles.disabled,
        ]}>
        <Text style={styles.buttonText}>
          {typeof this.props.children === 'string'
            ? this.props.children.toUpperCase()
            : this.props.children}
        </Text>
      </View>
    );
  }
  render() {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          {...this.props}
          disabled={this.props.disabled}
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}>
          {this.renderVisual()}
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableOpacity
          {...this.props}
          disabled={this.props.disabled}
          activeOpacity={0.7}
          onPress={this._onPressButton}>
          {this.renderVisual()}
        </TouchableOpacity>
      );
    }
  }
}

StandardButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

StandardButton.defaultProps = {
  onPress: () => {},
  disabled: false,
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 7,
    borderRadius: 26.5,
    backgroundColor: Colors.green.default,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 150,
  },
  disabled: {
    backgroundColor: Colors.grey.default,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 22,
    color: 'white',
  },
});

export {StandardButton};
