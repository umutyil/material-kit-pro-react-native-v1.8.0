import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class VentilatorVals extends React.Component {
  state = {
    Mode: '-',
    Fio2: '-',
    Peep: '-',
    TidalVol: '-',
    Etco2: '-',
    Pip: '-',
    Rr: '-',
    Ppl: '-',
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
    let genderList = ['PCV or VCV','A/C','BIPAP/SIMV','APRV','BiPAP','TCAV','CPAP'];
    return (
      <Block flex middle>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled > 
          <ScrollView>
            
            <Block flex={1} center space="between">
              <Block center>
              <Select
                bgColor='transparent'
                defaultValue='Please select Mode'
                options={genderList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                textStyle={styles.dropdown_3_text}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity('Mode', value)}
              />
              <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="FiO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Fio2', text)}
                  onBlur={() => this.toggleActive('Fio2')}
                  onFocus={() => this.toggleActive('Fio2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="PEEP"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Peep', text)}
                  onBlur={() => this.toggleActive('Peep')}
                  onFocus={() => this.toggleActive('Peep')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Tidal Volume"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('TidalVol', text)}
                  onBlur={() => this.toggleActive('TidalVol')}
                  onFocus={() => this.toggleActive('TidalVol')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="ETCO2"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Etco2', text)}
                  onBlur={() => this.toggleActive('Etco2')}
                  onFocus={() => this.toggleActive('Etco2')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="PIP"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Pip', text)}
                  onBlur={() => this.toggleActive('Pip')}
                  onFocus={() => this.toggleActive('Pip')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="RR"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rr', text)}
                  onBlur={() => this.toggleActive('Rr')}
                  onFocus={() => this.toggleActive('Rr')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Ppl"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ppl', text)}
                  onBlur={() => this.toggleActive('Ppl')}
                  onFocus={() => this.toggleActive('Ppl')}
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
