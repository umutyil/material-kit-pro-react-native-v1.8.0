import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableWithoutFeedback, } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';

import { Icon, Product } from '../components';

const { width } = Dimensions.get('screen');

import { materialTheme, products, Images, tabs } from '../constants/';

class GetSmartHome extends React.Component {

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]} 
            onPress={() => navigation.navigate('Patients')}
            >
            Patients
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]} 
            onPress={() => navigation.navigate('NewPatient')}
            >
            New Patient
            </Button>
          </Block>
          <Block flex>
            <Button shadowless color={materialTheme.COLORS.DEFAULT} textStyle={styles.textStyle} style={[styles.button, styles.shadow]} 
            
            >
            Criteria
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

export default withNavigation(GetSmartHome);

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
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
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
