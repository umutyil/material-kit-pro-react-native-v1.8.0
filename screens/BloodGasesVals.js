import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class BloodGasesVals extends React.Component {
  state = {
    Aph: '-',
    Apco2: '-',
    Apo2: '-',
    AHco3: '-',
    Asao2: '-',
    Alactate: '-',
    Vph: '-',
    Vpco2: '-',
    Vpo2: '-',
    VHco3: '-',
    Vsvo2: '-',
    Vlactate: '-',
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
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial pH"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Aph', text)}
                  onBlur={() => this.toggleActive('Aph')}
                  onFocus={() => this.toggleActive('Aph')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial pCO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Apco2', text)}
                  onBlur={() => this.toggleActive('Apco2')}
                  onFocus={() => this.toggleActive('Apco2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial pO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Apo2', text)}
                  onBlur={() => this.toggleActive('Apo2')}
                  onFocus={() => this.toggleActive('Apo2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial HCO3"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('AHco3', text)}
                  onBlur={() => this.toggleActive('AHco3')}
                  onFocus={() => this.toggleActive('AHco3')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial SaO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Asao2', text)}
                  onBlur={() => this.toggleActive('Asao2')}
                  onFocus={() => this.toggleActive('Asao2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Arterial Lactate"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Alactate', text)}
                  onBlur={() => this.toggleActive('Alactate')}
                  onFocus={() => this.toggleActive('Alactate')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous pH"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vph', text)}
                  onBlur={() => this.toggleActive('Vph')}
                  onFocus={() => this.toggleActive('Vph')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous pCO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vpco2', text)}
                  onBlur={() => this.toggleActive('Vpco2')}
                  onFocus={() => this.toggleActive('Vpco2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous pO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vpo2', text)}
                  onBlur={() => this.toggleActive('Vpo2')}
                  onFocus={() => this.toggleActive('Vpo2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous pHCO3"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('VHco3', text)}
                  onBlur={() => this.toggleActive('VHco3')}
                  onFocus={() => this.toggleActive('VHco3')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous SvO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vsvo2', text)}
                  onBlur={() => this.toggleActive('Vsvo2')}
                  onFocus={() => this.toggleActive('Vsvo2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Venous Lactate"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vlactate', text)}
                  onBlur={() => this.toggleActive('Vlactate')}
                  onFocus={() => this.toggleActive('Vlactate')}
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
