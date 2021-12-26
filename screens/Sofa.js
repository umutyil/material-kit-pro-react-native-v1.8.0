import React from 'react';
import { Alert, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Block, Button, Input, Text, theme } from 'galio-framework';
import { Select } from '../components';

import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('window');

export default class Sofa extends React.Component {
  state = {
    Respiration: '-',
    Coagulation: '-',
    Liver: '-',
    Cardiovascular: '-',
    Cns: '-',
    Renal: '-',
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
    let respList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    let coaList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    let liverList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    let cardioList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    let cnsList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    let renalList = ['Noradrenaline', 'Adrenaline', 'Dopamine', 'Dobutamine', 'Levosimendan', 'Milrinone', 'Vasporessin/argipressin', 'Midazolam', 'Fentanyl', 'Remifentanyl', 'Sufentanyl', 'Morphine', 'Propofol', 'Tiopental', 'Dexmedetomedine', 'Clonidine', 'Labetalol', 'Atracurium', 'Vecuronium', 'Rocuronium', 'Urapidil', 'Nitroprusiate', 'Nitroglicerine', 'Methylene blue', 'Nicardipine', 'Cisatracurium', 'Furosemide', 'Nimodipine'];
    return (
      <Block flex middle>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "padding"} enabled >
          <ScrollView>

            <Block flex={1} center space="between">
              <Block center>
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Respiration'
                  options={respList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Respiration', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Coagulation'
                  options={coaList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Coagulation', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Liver'
                  options={liverList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Liver', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Cardiovascular'
                  options={cardioList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Cardiovascular', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select CNS'
                  options={cnsList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Cns', value)}
                />
                <Select
                  bgColor='transparent'
                  defaultValue='Please select Renal'
                  options={renalList}
                  style={[styles.input, this.state.active.user ? styles.inputActive : null]}
                  textStyle={styles.dropdown_3_text}
                  borderless
                  color="white"
                  onSelect={(index, value) => this.handleQuantity('Renal', value)}
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
                      "SOFA Calculation Succesful! Result is 100. Mortality Rate is 12.5%",
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
