import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableWithoutFeedback, } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import { Icon, Product } from '../components';

const { width } = Dimensions.get('screen');

import { materialTheme, products, Images, tabs } from '../constants';

class CalculationResults extends React.Component {

  renderProducts = () => {
    const { navigation, route } = this.props;
    const patient = route.params?.patient;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Text bold size={16} style={styles.title}>{patient.title} - Assesment No: {patient.assesment} </Text>
          <TouchableWithoutFeedback
            key={`getsmarthome-image-1`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground
                source={{ uri: Images.Products['Accessories'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Left Ventricle</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`getsmarthome-image-2`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground

                source={{ uri: Images.Products['BMW'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Right Ventricle</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback key={`getsmarthome-image-3`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground
                source={{ uri: Images.Products['Watches'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Perfusion/Metabolic</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback key={`getsmarthome-image-4`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground
                source={{ uri: Images.Products['Mustang'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Preload</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`getsmarthome-image-5`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground
                source={{ uri: Images.Products['Accessories'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Afterload</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key={`getsmarthome-image-6`}
            >
            <Block flex card shadow style={styles.category}>

              <ImageBackground

                source={{ uri: Images.Products['BMW'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Ventilation</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback key={`getsmarthome-image-7`}
            onPress={() => navigation.navigate('ClinicalScores', { patient: patient })}>
            <Block flex card shadow style={styles.category}>

              <ImageBackground
                source={{ uri: Images.Products['Watches'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Clinical Scores</Text>
                </Block>
              </ImageBackground>

            </Block>
          </TouchableWithoutFeedback>

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

export default withNavigation(CalculationResults);

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
});
