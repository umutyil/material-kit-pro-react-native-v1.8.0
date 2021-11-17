import React from 'react';
import { StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text, Icon, theme } from 'galio-framework';

import { materialTheme } from '../constants/';
import { color } from 'react-native-reanimated';

export default class DropDown extends React.Component {
  state = {
    value: 'tes',
  }

  handleOnSelect = (index, value) => {
    const { onSelect } = this.props;

    this.setState({ value: value });
    onSelect && onSelect(index, value);
  }

  render() {
    const { onSelect, style, ...props } = this.props;
    return (
      
      <ModalDropdown
        style={[styles.qty, style]}
        textStyle={styles.dropdown_2_text}
        onSelect={this.handleOnSelect}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={{ paddingLeft: theme.SIZES.BASE, fontSize: 12 }}
        {...props}>
        
      </ModalDropdown>
    )
  }
}

const styles = StyleSheet.create({
  qty: {
    backgroundColor: 'transparent',
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: 10,
    paddingBottom: 9.5,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
    color: 'white'
  },
  dropdown: {
    marginTop: theme.SIZES.BASE / 2,
    marginLeft: -theme.SIZES.BASE,
    width: theme.SIZES.BASE * 6,
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    tintColor:'white'
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});