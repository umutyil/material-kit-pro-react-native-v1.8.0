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

  setVars = (obj) => {
    this.state = obj;
    console.log("yeni state");
    console.log(this.state);

  }

  render() {
    const item = this.props.route.params.regUser;
    this.setVars(item);
    const { navigation } = this.props;
    let units = ['Intensive care unit', 'Cardiac intensive care unit', 'Coronary care unit', 'Emergency department', 'Trauma unit'];
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
                Registration
              </Text>
              <Block flex={1} center space="between">
                <Block center>

                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Country"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('Country', text)}
                    onBlur={() => this.toggleActive('Country')}
                    onFocus={() => this.toggleActive('Country')}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="City"
                    iconColor="white"
                    style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('City', text)}
                    onBlur={() => this.toggleActive('City')}
                    onFocus={() => this.toggleActive('City')}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Hospital"
                    iconColor="white"
                    style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('Hospital', text)}
                    onBlur={() => this.toggleActive('Hospital')}
                    onFocus={() => this.toggleActive('Hospital')}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Unit"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('Hosunit', text)}
                    onBlur={() => this.toggleActive('Hosunit')}
                    onFocus={() => this.toggleActive('Hosunit')}
                  />
                  <Select
                    bgColor='transparent'
                    defaultValue='Type of Unit'
                    options={units}
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    borderless
                    color="white"
                    onSelect={(index, value) => this.handleQuantity('Typeunit', value)}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Full Hospital/Unit Address"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('Adress', text)}
                    onBlur={() => this.toggleActive('Adress')}
                    onFocus={() => this.toggleActive('Adress')}
                  />
                  <Input
                    bgColor='transparent'
                    placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                    borderless
                    color="white"
                    placeholder="Number of beds"
                    autoCapitalize="none"
                    style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                    onChangeText={text => this.handleChange('Beds', text)}
                    onBlur={() => this.toggleActive('Beds')}
                    onFocus={() => this.toggleActive('Beds')}
                  />


                </Block>
                <Block flex center style={{ marginTop: 20 }}>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Sign Up Step 4'), {
                      regUser: this.state
                    }}
                  >
                    NEXT
                  </Button>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Sign Up Step 2')}
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
