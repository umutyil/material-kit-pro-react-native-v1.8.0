import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class Apacheii extends React.Component {
  state = {
    Temperature: '-',
    Map: '-',
    HeartRate: '-',
    Oxygenization: '-',
    Aph: '-',
    SerumSodium: '-',
    SerumCreatinine: '-',
    SerumPotasium: '-',
    Hemotocrit: '-',
    WhiteBloodCells: '-',
    Gcs: '-',
    SerumHco3: '-',
    Age: '-',
    ChronicHealth: '-',
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
                  placeholder="Temperature"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Temperature', text)}
                  onBlur={() => this.toggleActive('Temperature')}
                  onFocus={() => this.toggleActive('Temperature')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="MAP"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Map', text)}
                  onBlur={() => this.toggleActive('Map')}
                  onFocus={() => this.toggleActive('Map')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Heart Rate"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('HeartRate', text)}
                  onBlur={() => this.toggleActive('HeartRate')}
                  onFocus={() => this.toggleActive('HeartRate')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Oxygenization"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Oxygenization', text)}
                  onBlur={() => this.toggleActive('Oxygenization')}
                  onFocus={() => this.toggleActive('Oxygenization')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
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
                  color="white"
                  type="decimal-pad"
                  placeholder="Serum Sodium"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('SerumSodium', text)}
                  onBlur={() => this.toggleActive('SerumSodium')}
                  onFocus={() => this.toggleActive('SerumSodium')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Serum Creatinine"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('SerumCreatinine', text)}
                  onBlur={() => this.toggleActive('SerumCreatinine')}
                  onFocus={() => this.toggleActive('SerumCreatinine')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Serum Potasium"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('SerumPotasium', text)}
                  onBlur={() => this.toggleActive('SerumPotasium')}
                  onFocus={() => this.toggleActive('SerumPotasium')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Hemotocrit"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Hemotocrit', text)}
                  onBlur={() => this.toggleActive('Hemotocrit')}
                  onFocus={() => this.toggleActive('Hemotocrit')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="White Blood Cells"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('WhiteBloodCells', text)}
                  onBlur={() => this.toggleActive('WhiteBloodCells')}
                  onFocus={() => this.toggleActive('WhiteBloodCells')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="GCS"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Gcs', text)}
                  onBlur={() => this.toggleActive('Gcs')}
                  onFocus={() => this.toggleActive('Gcs')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Serum HCO3"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('SerumHco3', text)}
                  onBlur={() => this.toggleActive('SerumHco3')}
                  onFocus={() => this.toggleActive('SerumHco3')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="number-pad"
                  placeholder="Age"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Age', text)}
                  onBlur={() => this.toggleActive('Age')}
                  onFocus={() => this.toggleActive('Age')}
                />
                <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Chronic Health"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('ChronicHealth', text)}
                    onBlur={() => this.toggleActive('ChronicHealth')}
                    onFocus={() => this.toggleActive('ChronicHealth')}
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
                    Alert.alert(
                      "Success",
                      "APACHE II Calculation Succesful! Result is 100. Mortality Rate is 12.5%",
                      [
                        { text: "OK", onPress: () => navigation.navigate('ClinicalScores', { patient: patient }) }
                      ]
                    );

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
