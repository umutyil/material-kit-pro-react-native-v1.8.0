import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class NewPatient extends React.Component {
  state = {
    Id: '-',
    BirthDate: '-',
    Gender: '-',
    Height: '-',
    Weight: '-',
    AdmissionDate: '-',
    Inclusion: '-',
    Exclusion: '-',
    Comorbidities: '-',
    Reasonofohca: '-',
    Ttm: '-',
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
    let genderList = ['Male','Female'];
    let comorbidityList = ['Coronary artery disease','Previous MI','Previous PCI','Previous CABG','Hypertension','COPD/asthma','Diabetes mellitus','Chronic heart failure','Chronic kidney disease','Stroke','Pulmonary hypertension','Cancer','Immunosuppression ','Smoking','Obesity ','Congenital heart disease','None'];
    let ohcaList = ['Acute coronary syndrome','Acute respiratory failure','Acute neurological event','Primary severe arrhythmia','Pulmonary embolism','Ao dissection','Acute HF','Decompendated HF','Valve disease','Unknown'];
    let ttmList = ['Invasive TTM','Non-invasive TTM','Target temperature','Time of cooling','Minimal temperature achieved','Time of fever control after cooling'];
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
                  type="number-pad"
                  placeholder="Patient ID"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Id', text)}
                  onBlur={() => this.toggleActive('Id')}
                  onFocus={() => this.toggleActive('Id')}
                />
                 <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Date of Birth"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('BirthDate', text)}
                  onBlur={() => this.toggleActive('BirthDate')}
                  onFocus={() => this.toggleActive('BirthDate')}
                />
                <Select
                bgColor='transparent'
                defaultValue='Please select your Gender'
                options={genderList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                textStyle={styles.dropdown_3_text}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity('Gender', value)}
              />
              <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="number-pad"
                  placeholder="Height (cm)"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Height', text)}
                  onBlur={() => this.toggleActive('Height')}
                  onFocus={() => this.toggleActive('Height')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  type="decimal-pad"
                  placeholder="Weight (kg)"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.email ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Weight', text)}
                  onBlur={() => this.toggleActive('Weight')}
                  onFocus={() => this.toggleActive('Weight')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Admissin Date"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('AdmissionDate', text)}
                  onBlur={() => this.toggleActive('AdmissionDate')}
                  onFocus={() => this.toggleActive('AdmissionDate')}
                />
                
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Inclusion Criteria"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Inclusion', text)}
                  onBlur={() => this.toggleActive('Inclusion')}
                  onFocus={() => this.toggleActive('Inclusion')}
                />
                <Input
                  bgColor='transparent'
                  placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                  borderless
                  color="white"
                  placeholder="Exclusion Criteria"
                  autoCapitalize="none"
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  onChangeText={text => this.handleChange('Exclusion', text)}
                  onBlur={() => this.toggleActive('Exclusion')}
                  onFocus={() => this.toggleActive('Exclusion')}
                />
               
                <Select
                bgColor='transparent'
                defaultValue='Please select Comorbidities'
                options={comorbidityList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                textStyle={styles.dropdown_3_text}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity('Comorbidities', value)}
              />
              <Select
                bgColor='transparent'
                defaultValue='Please select Reason of OHCA'
                options={ohcaList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                textStyle={styles.dropdown_3_text}
                borderless
                color="white"
                onSelect={(index, value) => this.handleQuantity('Reasonofohca', value)}
              />
              <Select
                bgColor='transparent'
                defaultValue='Please select TTM'
                options={ttmList}
                style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                textStyle={styles.dropdown_3_text}
                borderless
                color={materialTheme.COLORS.BUTTON_COLOR}
                onSelect={(index, value) => this.handleQuantity('Ttm', value)}
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
                    navigation.navigate('Patients', {
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
