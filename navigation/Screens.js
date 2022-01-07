import React from "react";
import { Easing, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon, Header } from "../components/";
import { Images, materialTheme } from "../constants/";

// screens
import OnboardingScreen from "../screens/Onboarding";
import HomeScreen from "../screens/Home";
import WomanScreen from "../screens/Woman";
import ManScreen from "../screens/Man";
import KidsScreen from "../screens/Kids";
import NewCollectionScreen from "../screens/NewCollection";
import DealsScreen from "../screens/Deals";

import CategoriesScreen from "../screens/Categories";
import CategoryScreen from "../screens/Category";
import ProductScreen from "../screens/Product";
import GalleryScreen from "../screens/Gallery";
import ChatScreen from "../screens/Chat";

import CartScreen from "../screens/Cart";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import SignUpScreen1 from "../screens/SignUp1";
import SignUpScreen2 from "../screens/SignUp2";
import SignUpScreen3 from "../screens/SignUp3";
import SignUpScreen4 from "../screens/SignUp4";

import SearchScreen from "../screens/Search";
import ComponentsScreen from "../screens/Components";

import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import NotificationsScreen from "../screens/Notifications";
import PrivacyScreen from "../screens/Privacy";
import AboutScreen from "../screens/About";
import AgreementScreen from "../screens/Agreement";

import GetSmartHome from "../screens/GetSmartHome";
import NewPatient from "../screens/NewPatient";

import ICUHome from "../screens/ICUHome";

import CustomDrawerContent from "./Menu";
import { tabs } from "../constants/";
import Patients from "../screens/Patients";
import PatientDetail from "../screens/PatientDetail";
import NewCalculation from "../screens/NewCalculation";
import NewCollection from "../screens/NewCollection";
import BloodGasesVals from "../screens/BloodGasesVals";
import CalculationResults from "../screens/CalculationResults";
import ClinicalScores from "../screens/ClinicalScores";
import InfusionVals from "../screens/InfusionVals";
import LabVals from "../screens/LabVals";
import MonitorVals from "../screens/MonitorVals";
import PepVals from "../screens/PepVals";
import TteVals from "../screens/TteVals";
import VentilatorVals from "../screens/VentilatorVals";
import Apacheii from "../screens/Apacheii";
import Berlinards from "../screens/Berlinards";
import Murray from "../screens/Murray";
import Sofa from "../screens/Sofa";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Premedix Tester",
  type: "Critical care",
  plan: "Dr.",
  rating: 12
};

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Profile"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              scene={scene}
              navigation={navigation}
            />
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Cart" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" scene={scene} navigation={navigation} />
          )
        }}
      />
      <Stack.Screen
        name="Agreement"
        component={AgreementScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Agreement"
              scene={scene}
              navigation={navigation}
            />
          )
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Privacy"
              scene={scene}
              navigation={navigation}
            />
          )
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="About us"
              scene={scene}
              navigation={navigation}
            />
          )
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Notifications Settings"
              scene={scene}
              navigation={navigation}
            />
          )
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Shopping Cart"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Components" mode="card" headerMode="screen">
      <Stack.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          header: ({ navigation }) => (
            <Header title="Components" navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={SignUpStack} />
    </Stack.Navigator>
  );
}

function WomanStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Woman"
        component={ICUHome}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="ICU Assistant"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="NewCalculation"
        component={NewCalculation}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="New Calculation"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="BloodGasesVals"
        component={BloodGasesVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Blood Gases Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="CalculationResults"
        component={CalculationResults}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Calculation Results"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ClinicalScores"
        component={ClinicalScores}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Clinical Scores"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="InfusionVals"
        component={InfusionVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Infusion Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="LabVals"
        component={LabVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Laboratory Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="MonitorVals"
        component={MonitorVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Monitor Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="PepVals"
        component={PepVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Physical Evaluation Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="TteVals"
        component={TteVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Ultrasound Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="VentilatorVals"
        component={VentilatorVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Ventilator Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Sofa"
        component={Sofa}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Sofa"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Apacheii"
        component={Apacheii}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Apacheii"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Berlinards"
        component={Berlinards}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Berlin ARDS"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Murray"
        component={Murray}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Murray Lung Injury Score"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ManStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Man"
        component={ManScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="Man"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            const { params } = scene.descriptor;
            const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title={title}
                navigation={navigation}
                scene={scene}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Shopping Cart"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function KidsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Kids"
        component={KidsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="Kids"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            const { params } = scene.descriptor;
            const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title={title}
                navigation={navigation}
                scene={scene}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Shopping Cart"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function NewCollectionStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="NewCollection"
        component={NewCollectionScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              options
              title="New Collection"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              tabs={tabs.deals}
              title="Best Deals"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              tabs={tabs.categories}
              tabIndex={tabs.categories[1].id}
              title="Categories"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            const { params } = scene.descriptor;
            const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title={title}
                navigation={navigation}
                scene={scene}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Rachel Brown"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Shopping Cart"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back title="Search" navigation={navigation} scene={scene} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={GetSmartHome}
        options={{
          header: ({ navigation, scene }) => (
            <Header

              title="GetSMART Home"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="NewPatient"
        component={NewPatient}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="New Patient"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Patients"
        component={Patients}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Patients"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          header: ({ navigation, scene }) => {
            const { params } = scene.descriptor;
            const title = (params && params.headerTitle) || "Category";
            return (
              <Header
                back
                title={title}
                navigation={navigation}
                scene={scene}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="PatientDetail"
        component={PatientDetail}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Patient Detail"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen
        name="NewCalculation"
        component={NewCalculation}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="New Calculation"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="BloodGasesVals"
        component={BloodGasesVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Blood Gases Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="CalculationResults"
        component={CalculationResults}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Calculation Results"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ClinicalScores"
        component={ClinicalScores}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Clinical Scores"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="InfusionVals"
        component={InfusionVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Infusion Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="LabVals"
        component={LabVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Laboratory Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="MonitorVals"
        component={MonitorVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Monitor Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="PepVals"
        component={PepVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Physical Evaluation Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="TteVals"
        component={TteVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Ultrasound Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="VentilatorVals"
        component={VentilatorVals}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Ventilator Values"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Sofa"
        component={Sofa}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Sofa"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Apacheii"
        component={Apacheii}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Apacheii"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Berlinards"
        component={Berlinards}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Berlin ARDS"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Murray"
        component={Murray}
        options={{
          header: ({ navigation, scene, route }) => (
            <Header
              back
              title="Murray Lung Injury Score"
              navigation={navigation}
              route={route}
              scene={scene}
            />
          ),
          //headerTransparent: true
        }}
      />

    </Stack.Navigator>
  );
}

function SignUpStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Up Step 2"
        component={SignUpScreen1}
        options={{

        }}
      />
      <Stack.Screen
        name="Sign Up Step 3"
        component={SignUpScreen2}
        options={{

        }}
      />
      <Stack.Screen
        name="Sign Up Step 4"
        component={SignUpScreen3}
        options={{

        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props}  />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Sign In"
    >
      <Drawer.Screen
        name="Get Smart"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="ICU Assistant"
        component={WomanStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-woman"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginLeft: 4, marginRight: 4 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Man"
        component={ManStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="man"
              family="entypo"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Kids"
        component={KidsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="baby"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="New Collection"
        component={NewCollectionStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="grid-on"
              family="material"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          )
        }}
      />
      

    </Drawer.Navigator>
  );
}
