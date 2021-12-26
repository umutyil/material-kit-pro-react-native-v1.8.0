import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class LabVals extends React.Component {
  state = {
    Wbc: '-',
    Hscrp: '-',
    Procalc: '-',
    Nse: '-',
    Hb: '-',
    Hct: '-',
    Plt: '-',
    Rbc: '-',
    Ddimer: '-',
    Creat: '-',
    Rdwcv: '-',
    Act: '-',
    Biliru: '-',
    Ast: '-',
    Alt: '-',
    active: {
      user: false,
      email: false,
      password: false,
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  handleQuantity = (id, qty) => {
    this.setState({ [id]: qty });
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }


  render() {
    const { navigation, route } = this.props;
    const patient = route.params?.patient;
    return (
      <Block flex middle>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled > 
          <ScrollView>
            
            <Block flex={1} center space="between">
              <Block center>
                
              <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="WBC"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Wbc', text)}
                  onBlur={() => this.toggleActive('Wbc')}
                  onFocus={() => this.toggleActive('Wbc')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="hsCRP"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Hscrp', text)}
                  onBlur={() => this.toggleActive('Hscrp')}
                  onFocus={() => this.toggleActive('Hscrp')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Procalc"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Procalc', text)}
                  onBlur={() => this.toggleActive('Procalc')}
                  onFocus={() => this.toggleActive('Procalc')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="NSE"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Nse', text)}
                  onBlur={() => this.toggleActive('Nse')}
                  onFocus={() => this.toggleActive('Nse')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Hb"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Hb', text)}
                  onBlur={() => this.toggleActive('Hb')}
                  onFocus={() => this.toggleActive('Hb')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="HCT"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Hct', text)}
                  onBlur={() => this.toggleActive('Hct')}
                  onFocus={() => this.toggleActive('Hct')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="PLT"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Plt', text)}
                  onBlur={() => this.toggleActive('Plt')}
                  onFocus={() => this.toggleActive('Plt')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RBC"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rbc', text)}
                  onBlur={() => this.toggleActive('Rbc')}
                  onFocus={() => this.toggleActive('Rbc')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="D-dimer"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ddimer', text)}
                  onBlur={() => this.toggleActive('Ddimer')}
                  onFocus={() => this.toggleActive('Ddimer')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Creat"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Creat', text)}
                  onBlur={() => this.toggleActive('Creat')}
                  onFocus={() => this.toggleActive('Creat')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RDW CV"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rdwcv', text)}
                  onBlur={() => this.toggleActive('Rdwcv')}
                  onFocus={() => this.toggleActive('Rdwcv')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="ACT"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Act', text)}
                  onBlur={() => this.toggleActive('Act')}
                  onFocus={() => this.toggleActive('Act')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Biliru"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Biliru', text)}
                  onBlur={() => this.toggleActive('Biliru')}
                  onFocus={() => this.toggleActive('Biliru')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="AST"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ast', text)}
                  onBlur={() => this.toggleActive('Ast')}
                  onFocus={() => this.toggleActive('Ast')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="ALT"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Alt', text)}
                  onBlur={() => this.toggleActive('Alt')}
                  onFocus={() => this.toggleActive('Alt')}
                />
                
                
              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => {
                    // TODO: Save patient
                    navigation.navigate('NewCalculation', {
                      regUser: this.state
                   });
                    
                }
                }
                >
                  SAVE
                </Button>
                <Button
                size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => navigation.navigate('NewCalculation')}
                >
                  BACK
                </Button>
                
              </Block>
            </Block>
            </ScrollView>
          </KeyboardAvoidingView>
        </Block>
      
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  input: {
    width: width * 0.9,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputActive: {
    borderBottomColor: "white",
  },
  dropdown_3_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: materialTheme.COLORS.BUTTON_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
