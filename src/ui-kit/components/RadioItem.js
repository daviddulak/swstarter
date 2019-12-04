import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Colors} from '../Colors';

class RadioItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }
  onPress = () => {
    this.props.onChange(!this.state.selected);
    this.setState({
      selected: !this.state.selected,
    });
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.container}>
          <View
            style={[styles.radio, this.state.selected && styles.radioSelected]}>
            <View
              style={[
                styles.radioInner,
                this.state.selected && styles.radioInnerSelected,
              ]}
            />
          </View>
          <Text style={styles.label}>{this.props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RadioItem.propTypes = {
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioItem.defaultProps = {
  selected: false,
  onChange: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  radio: {
    borderColor: Colors.grey.default,
    borderWidth: 1,
    borderRadius: 15,
    width: 15,
    height: 15,
  },
  radioSelected: {
    borderColor: 'white',
  },
  radioInner: {
    borderColor: Colors.blue.default,
    borderWidth: 5,
    width: 13,
    height: 13,
    borderRadius: 15,
    opacity: 0,
  },
  radioInnerSelected: {
    opacity: 1,
  },
  label: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 36,
  },
});

export {RadioItem};
