import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components/';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class SignUp extends React.Component {
  state = {
    user: '-',
    email: '-',
    password: '-',
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

  render() {
    const { navigation } = this.props;
    let units = ['Intensive care unit','Cardiac intensive care unit','Coronary care unit','Emergency department','Trauma unit'];
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Block flex middle>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} enabled keyboardVerticalOffset={0}> 
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
                  onChangeText={text => this.handleChange('email', text)}
                  onBlur={() => this.toggleActive('email')}
                  onFocus={() => this.toggleActive('email')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="City"
                  iconColor="white"
                  style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('password', text)}
                  onBlur={() => this.toggleActive('password')}
                  onFocus={() => this.toggleActive('password')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Hospital"
                  iconColor="white"
                  style={[styles.input, this.state.active.password ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('password', text)}
                  onBlur={() => this.toggleActive('password')}
                  onFocus={() => this.toggleActive('password')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Unit"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('user', text)}
                  onBlur={() => this.toggleActive('user')}
                  onFocus={() => this.toggleActive('user')}
                />
                <Select
                bgColor='transparent'
                defaultValue='Type of Unit'
                options={units}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity(0, value)}
              />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Full Hospital/Unit Address"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('user', text)}
                  onBlur={() => this.toggleActive('user')}
                  onFocus={() => this.toggleActive('user')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Number of beds"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('user', text)}
                  onBlur={() => this.toggleActive('user')}
                  onFocus={() => this.toggleActive('user')}
                />
                
                
              </Block>
              <Block flex center style={{ marginTop: 20 }}>
                <Button
                size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => navigation.navigate('Sign Up Step 4')}
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
