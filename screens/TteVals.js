import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class TteVals extends React.Component {
  state = {
    Ivcd: '-',
    Lvot: '-',
    Lvedv: '-',
    Lvesv: '-',
    Lav: '-',
    Ea: '-',
    Ee: '-',
    Tapse: '-',
    Rveda: '-',
    Rvesa: '-',
    Trvmax: '-',
    Lvotmax: '-',
    Lvotvti: '-',
    Rvot: '-',
    Rvotvti: '-',
    Vmax: '-',
    Vend: '-',
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
                  placeholder="IVCd max/min"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ivcd', text)}
                  onBlur={() => this.toggleActive('Ivcd')}
                  onFocus={() => this.toggleActive('Ivcd')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LVOT diameter"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lvot', text)}
                  onBlur={() => this.toggleActive('Lvot')}
                  onFocus={() => this.toggleActive('Lvot')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LVEDV"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lvedv', text)}
                  onBlur={() => this.toggleActive('Lvedv')}
                  onFocus={() => this.toggleActive('Lvedv')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LVESV"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lvesv', text)}
                  onBlur={() => this.toggleActive('Lvesv')}
                  onFocus={() => this.toggleActive('Lvesv')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LAV"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lav', text)}
                  onBlur={() => this.toggleActive('Lav')}
                  onFocus={() => this.toggleActive('Lav')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="E/A"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ea', text)}
                  onBlur={() => this.toggleActive('Ea')}
                  onFocus={() => this.toggleActive('Ea')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="E/É lat (sept option)"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Ee', text)}
                  onBlur={() => this.toggleActive('Ee')}
                  onFocus={() => this.toggleActive('Ee')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="TAPSE"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Tapse', text)}
                  onBlur={() => this.toggleActive('Tapse')}
                  onFocus={() => this.toggleActive('Tapse')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RV EDA"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rveda', text)}
                  onBlur={() => this.toggleActive('Rveda')}
                  onFocus={() => this.toggleActive('Rveda')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RV ESA"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rvesa', text)}
                  onBlur={() => this.toggleActive('Rvesa')}
                  onFocus={() => this.toggleActive('Rvesa')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="TR Vmax"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Trvmax', text)}
                  onBlur={() => this.toggleActive('Trvmax')}
                  onFocus={() => this.toggleActive('Trvmax')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LVOT Vmax max/min"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lvotmax', text)}
                  onBlur={() => this.toggleActive('Lvotmax')}
                  onFocus={() => this.toggleActive('Lvotmax')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="LVOT VTI max/min"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Lvotvti', text)}
                  onBlur={() => this.toggleActive('Lvotvti')}
                  onFocus={() => this.toggleActive('Lvotvti')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RVOT diam"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rvot', text)}
                  onBlur={() => this.toggleActive('Rvot')}
                  onFocus={() => this.toggleActive('Rvot')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="RVOT VTI"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Rvotvti', text)}
                  onBlur={() => this.toggleActive('Rvotvti')}
                  onFocus={() => this.toggleActive('Rvotvti')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Pulm reg Vmax"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vmax', text)}
                  onBlur={() => this.toggleActive('Vmax')}
                  onFocus={() => this.toggleActive('Vmax')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Pulm reg Vend-diast"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Vend', text)}
                  onBlur={() => this.toggleActive('Vend')}
                  onFocus={() => this.toggleActive('Vend')}
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
