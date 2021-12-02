import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components/';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
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

  handleQuantity = (id, qty) => {
    this.setState({ [id]: qty });
  }

  toggleActive = (name) => {
    const { active } = this.state;
    active[name] = !active[name];

    this.setState({ active });
  }


  render() {
    const { navigation } = this.props;
    let suffixList = ['Dr.','Mr.','Ms.','Mrs.','Prof'];
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4,  minHeight: Math.round(Dimensions.get('window').height)  }]}>
        <Block flex middle>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled > 
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
                  type="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Email', text)}
                  onBlur={() => this.toggleActive('Email')}
                  onFocus={() => this.toggleActive('Email')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  password
                  viewPass
                  placeholder="Password"
                  iconColor="white"
                  style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Password', text)}
                  onBlur={() => this.toggleActive('Password')}
                  onFocus={() => this.toggleActive('Password')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  password
                  viewPass
                  placeholder="Repeat Password"
                  iconColor="white"
                  style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('RepeatPassword', text)}
                  onBlur={() => this.toggleActive('RepeatPassword')}
                  onFocus={() => this.toggleActive('RepeatPassword')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="First Name"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Firstname', text)}
                  onBlur={() => this.toggleActive('Firstname')}
                  onFocus={() => this.toggleActive('Firstname')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Family Name"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Surname', text)}
                  onBlur={() => this.toggleActive('Surname')}
                  onFocus={() => this.toggleActive('Surname')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Date of Birth"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Dateofbirth', text)}
                  onBlur={() => this.toggleActive('Dateofbirth')}
                  onFocus={() => this.toggleActive('Dateofbirth')}
                />
                <Select
                bgColor='transparent'
                defaultValue='Please select your Suffix'
                options={suffixList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity('Suffix', value)}
              />
                
              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => {
                    if(this.state.Password == this.state.RepeatPassword){
                      navigation.navigate('Sign Up Step 2', {
                        regUser: this.state
                     });
                    } else {
                      Alert.alert(
                        "Mismatch",
                        "Passwords do not match",
                        [
                          
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                      );
                    }
                    
                }
                }
                >
                  NEXT
                </Button>
                <Button
                size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => navigation.navigate('Sign In')}
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
