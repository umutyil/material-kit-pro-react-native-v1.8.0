import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ToastAndroid, ScrollView } from 'react-native';

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
    let suffixList = [{ value: 'Dr.' }, { value: 'Mr.' }, { value: 'Ms.' }, { value: 'Mrs.' }, { value: 'Prof' }];

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
                This application is addressed ONLY to Medical Practitioners. GetSMART provides estimation of hemodynamic and ventilatory parameters  and provide clinical decision making assistance based on available medical literature.  Final decisions are responsibility of the trained medical practitioner according to the clinic context.
              </Text>
              <Block flex={1} center space="between">

                <Block flex center style={{ marginTop: 20 }}>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => {
                      fetch('https://10.242.174.78​/SmartUser​/SmartUser​/Register', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state)
                      }).then((json) => {
                        console.log(json);
                        if (json.isSuccess) {
                          Alert.alert(
                            "Success",
                            "Registration successful",
                            [
                              { text: "OK", onPress: () => navigation.navigate('Sign In') }
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
                        console.error(error);
                      });

                    }}
                  >
                    REGISTER
                  </Button>
                  <Button
                    size="large"
                    shadowless
                    style={{ height: 48 }}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Sign Up Step 3')}
                  >
                    BACK
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
