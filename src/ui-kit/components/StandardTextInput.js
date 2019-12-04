import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';
import {Colors} from '../Colors';

class StandardTextInput extends PureComponent {
  handleBlur = (text) => {
    //blur
    console.log(`textBlur:${text}`);
  };
  handleTextChange = (text) => {
    //text change
    console.log(`textChange:${text}`);
  };
  handleSubmitEditing = (text) => {
    //submit
    console.log(`textSubmit:${text}`);
  };
  handleEndEditing = (text) => {
    //submit
    console.log(`textEnd:${text}`);
  };
  render() {
    return (
      <>
        <TextInput
          style={styles.textInput}
          accessible={true}
          accessibilityLabel={this.props.label}
          testID={this.props.label}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
          placeholderTextColor={Colors.grey.default}
          underlineColorAndroid="transparent"
          returnKeyType={this.props.returnKeyType}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onSubmit}
        />
      </>
    );
  }
}

StandardTextInput.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  label: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

StandardTextInput.defaultProps = {
  keyboardType: 'default',
  placeholder: 'e.g. Chewbacca, Yoda',
  returnKeyType: 'done',
  label: '',
  autoCorrect: false,
  autoCapitalize: 'none',
  onChange: () => {},
  onSubmit: () => {},
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: Colors.grey.default,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
});

export {StandardTextInput};
