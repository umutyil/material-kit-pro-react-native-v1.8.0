import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, Patient } from '../components/';
import { getPatients } from '../store/actions/Patients';

const { width } = Dimensions.get('screen');

function Patients() {

  const componentDidMount = async () => {
    var credentials = {};
    try {
      var ass = await AsyncStorage.getItem('session');
      if (ass) {
        credentials = JSON.parse(ass);
        console.log(
          'Credentials successfully loaded for user ' + JSON.stringify(credentials)
        );
        userId = credentials.userId;
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  const { patients } = useSelector(state => state.patientsReducer);

  var userId = 1;
  const dispatch = useDispatch();
  const getPatientList = (userId) => dispatch(getPatients(userId));
  useEffect(() => {
    componentDidMount().then(() =>  getPatientList(userId));
    console.log('patients fetched:' + JSON.stringify(patients));
  }, []);

  if (patients && patients.length > 0) {
    return (
      <Block flex center style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}>
          <Block flex>
            {patients.map((img, index) => (
              <Patient key={`patient-${index}`} patient={img} horizontal />
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  } else {
    return (
      <Block flex center style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}>
          <Block flex>
            <Text center color="black" size={14}>
              No Patients Recorded Yet.
            </Text>
          </Block>
        </ScrollView>
      </Block>
    )
  }



}

export default Patients;

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
});
