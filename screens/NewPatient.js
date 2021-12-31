import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class NewPatient extends React.Component {
  state = {
    patientCode: '-',
    birthDate: '-',
    gender: '-',
    height: '-',
    weight: '-',
    admissionDate: '-',
    inclusion: '-',
    exclusion: '-',
    comorbidities: '-',
    reasonofocha: '-',
    ttm: '-',
    userId: 1,
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

  async componentDidMount() {
    var credentials = {};
    try {
      var ass = await AsyncStorage.getItem('session');
      if (ass) {
        credentials = JSON.parse(ass);
        console.log(
          'Credentials successfully loaded for user ' + JSON.stringify(credentials)
        );
        this.handleChange('userId', credentials.userId)
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  }


  render() {
    const { navigation } = this.props;

    let genderList = ['Male', 'Female'];
    let comorbidityList = ['Coronary artery disease', 'Previous MI', 'Previous PCI', 'Previous CABG', 'Hypertension', 'COPD/asthma', 'Diabetes mellitus', 'Chronic heart failure', 'Chronic kidney disease', 'Stroke', 'Pulmonary hypertension', 'Cancer', 'Immunosuppression ', 'Smoking', 'Obesity ', 'Congenital heart disease', 'None'];
    let ohcaList = ['Acute coronary syndrome', 'Acute respiratory failure', 'Acute neurological event', 'Primary severe arrhythmia', 'Pulmonary embolism', 'Ao dissection', 'Acute HF', 'Decompendated HF', 'Valve disease', 'Unknown'];
    let ttmList = ['Invasive TTM', 'Non-invasive TTM', 'Target temperature', 'Time of cooling', 'Minimal temperature achieved', 'Time of fever control after cooling'];
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
                  type="number-pad"
                  placeholder="Patient Code"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('patientCode', text)}
                  onBlur={() => this.toggleActive('patientCode')}
                  onFocus={() => this.toggleActive('patientCode')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  placeholder="Date of Birth"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('birthDate', text)}
                  onBlur={() => this.toggleActive('birthDate')}
                  onFocus={() => this.toggleActive('birthDate')}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select your Gender'
                  options={genderList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('gender', value)}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="number-pad"
                  placeholder="Height (cm)"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('height', text)}
                  onBlur={() => this.toggleActive('height')}
                  onFocus={() => this.toggleActive('height')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  type="decimal-pad"
                  placeholder="Weight (kg)"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('weight', text)}
                  onBlur={() => this.toggleActive('weight')}
                  onFocus={() => this.toggleActive('weight')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  placeholder="Admission Date"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('admissionDate', text)}
                  onBlur={() => this.toggleActive('admissionDate')}
                  onFocus={() => this.toggleActive('admissionDate')}
                />

                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  placeholder="Inclusion Criteria"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('inclusion', text)}
                  onBlur={() => this.toggleActive('inclusion')}
                  onFocus={() => this.toggleActive('inclusion')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="black"
                  placeholder="Exclusion Criteria"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('exclusion', text)}
                  onBlur={() => this.toggleActive('exclusion')}
                  onFocus={() => this.toggleActive('exclusion')}
                />

                <Select
                  bgColor='transparent'
                  defaultValue='Please select Comorbidities'
                  options={comorbidityList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('comorbidities', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Reason of OHCA'
                  options={ohcaList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('reasonofocha', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select TTM'
                  options={ttmList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onSelect={(index, value) => this.handleQuantity('ttm', value)}
                />

              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => {
                    console.log("Gönderilen hasta");
                    console.log(JSON.stringify(this.state));
                    fetch('https://getsmart.premedix.sk​/Patient/Patient/Register', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(this.state)
                    }).then(response => response.json()).then((json) => {
                      console.log(json);
                      if (json.isSuccess) {
                        Alert.alert(
                          "Success",
                          "Registration successful",
                          [
                            { text: "OK", onPress: () => navigation.navigate('Patients') }
                          ]
                        );

                      } else {
                        Alert.alert(
                          "Error",
                          json.message,
                          [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                          ]
                        );
                      }
                    }).catch((error) => {
                      console.error(JSON.stringify(error));
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
                  onPress={() => navigation.navigate('Home')}
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
