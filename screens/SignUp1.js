import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components/';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class SignUp extends React.Component {
  state = {
    user: '-',
    Email: '-',
    Firstname: '-',
    Surname: '-',
    Dateofbirth: '-',
    Suffix: '-',
    Password: '-',
    RepeatPassword: '-',
    Specilization: '-',
    PracticeYears: '-',
    Academic: '-',
    Echot: '-',
    Hemo: '-',
    Researcher: '-',
    Proffessor: '-',
    Country: '-',
    City: '-',
    Hospital: '-',
    Hosunit: '-',
    Typeunit: '-',
    Adress: '-',
    Beds: '-',
    active: {
      user: false,
      email: false,
      password: false,
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }
  handleQuantity = (id, qty) => {
    this.setState({ [id]: qty });
  }

  setVars = (obj) => {
    this.state = obj;
    console.log("yeni state");
    console.log(this.state);

  }

  render() {
    const item = this.props.route.params.regUser;
    this.setVars(item);
    const { navigation } = this.props;
    let specialization = ['Critical care', 'Anesthesia', 'Cardiology', 'Emergenciology', 'Internal medicine', 'None'];
    let yesNo = ['Yes', 'No'];
    let academics = ['MD', 'Specialist', 'Master', 'PhD'];
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4, minHeight: Math.round(Dimensions.get('window').height) }]}>
        <Block flex middle>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled keyboardVerticalOffset={0}>
            <ScrollView>
              <Block style={{ marginBottom: height * 0.05 }}>
                <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
                  <Text color='#fff' center size={theme.SIZES.FONT * 2}>
                    GetSMART
                  </Text>

                </Block>

              </Block>
              <Text color='#fff' center size={theme.SIZES.FONT * 1.25}>
                Registration Step 2
              </Text>
              <Block flex={1} center space="between">
                <Block center>
                  <Select
                    bgColor='transparent'
                    defaultValue='Please select your Specialization'
                    options={specialization}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Specilization', value)}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Years of Experience"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('PracticeYears', text)}
                    onBlur={() => this.toggleActive('PracticeYears')}
                    onFocus={() => this.toggleActive('PracticeYears')}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Please select your Highest Academic Degree'
                    options={academics}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Academic', value)}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Echocardiography training?'
                    options={yesNo}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Echot', value)}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Advanced hemodynamic monitoring training?'
                    options={yesNo}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Hemo', value)}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Researcher?'
                    options={yesNo}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Researcher', value)}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Professor/instructor?'
                    options={yesNo}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Proffessor', value)}
                  />


                </Block>
                <Block flex center style={{ marginTop: 20 }}>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Sign Up Step 3', {
                      regUser: this.state
                    })}
                  >
                    NEXT
                  </Button>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Sign Up')}
                  >
                    BACK
                  </Button>
                  <Button size="large" color="transparent" shadowless onPress={() => navigation.navigate('Sign In')}>
                    <Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>
                      Already have an account? Sign In
                    </Text>
                  </Button>
                </Block>
              </Block>
            </ScrollView>
          </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
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
});
