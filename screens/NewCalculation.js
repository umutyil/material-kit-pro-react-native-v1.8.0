import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableWithoutFeedback, } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import { Icon, Product } from '../components';

const { width } = Dimensions.get('screen');

import { materialTheme, products, Images, tabs } from '../constants';

class NewCalculation extends React.Component {

  renderProducts = () => {
    const { navigation, route } = this.props;
    const patient = route.params?.patient;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
        <Text bold size={16} style={styles.title}>{patient.patientCode} - Assesment No: {patient.assesment} </Text>
        <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('MonitorVals', { patient: patient })}
            >
              Monitor Values
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('TteVals', { patient: patient })}
            >
              TTE Values
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('VentilatorVals', { patient: patient })}
            >
              Ventilator Values
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('PepVals', { patient: patient })}
            >
              Patient Evaluation Parameters
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('BloodGasesVals', { patient: patient })}
            >
              Blood Gases Values
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('LabVals', { patient: patient })}
            >
              Lab Values
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('InfusionVals', { patient: patient })}
            >
              Infusion Dose Calculator
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('UnitsCalculator', { patient: patient })}
            >
              Units Calculator
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]}
              onPress={() => navigation.navigate('NormalVals', { patient: patient })}
            >
              Normal Values
            </Button>
          </Block>
          <Block flex center style={{ marginTop: 20 }}>
                <Button
                  size="large"
                  shadowless
                  style={{ height: 48 }}
                  color={materialTheme.COLORS.BUTTON_COLOR}
                  onPress={() => {
                    // TODO: Save patient
                    navigation.navigate('CalculationResults', {
                      patient: patient
                    });

                  }
                  }
                >
                  CALCULATE
                </Button>

              </Block>
        </Block>
      </ScrollView>
    )
  }

  render() {

    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

export default withNavigation(NewCalculation);

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - (theme.SIZES.BASE * 3),
    color: theme.COLORS.BLACK
  },
  textStyle: {
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.BLACK,
  },
});
