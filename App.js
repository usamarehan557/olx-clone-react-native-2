/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginEmailScreen from './src/screens/LoginEmailScreen';
import LoginMainScreen from './src/screens/LoginMainScreen';
import LoginPhoneScreen from './src/screens/LoginPhoneScreen';
import AddressScreen from './src/screens/AddressScreen';
import HelpScreen from './src/screens/HelpScreen';
import TestScreen from './src/screens/TestScreen';
import OldUserPasswordScreen from './src/screens/OldUserPasswordScreen';
import { useNavigation } from '@react-navigation/native';



const Stack = createNativeStackNavigator();


function BackButton() {
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image 
        source={require('./src/assets/previous.png')}
        style={{ width: 14, height: 14, marginRight: 10 }}
      />
    </TouchableOpacity>
  )
}

function CloseButton() {
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Address')}>
      <Image 
        source={require('./src/assets/close.png')}
        style={{ width: 15, height: 15, marginRight: 10}}
      />
    </TouchableOpacity>
  )
}

function App({navigation}) {

  useEffect(() => 
  // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide(),
  []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginMain'>
        <Stack.Screen 
          name="LoginMain"
          component={LoginMainScreen}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen 
          name="LoginEmail"
          component={LoginEmailScreen} 
          options={({route}) => ({
            title: route.params.title,
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
              color: '#003034'
            },
            headerShadowVisible: false,
            headerLeft: ((props) => <BackButton {...props} />),
            headerStyle: {
              backgroundColor: 'transparent',
            }
          })}/>
        <Stack.Screen 
          name="LoginPhone"
          component={LoginPhoneScreen} 
          options={({route}) => ({
            title: route.params.title,
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
              color: '#003034'
            },
            headerShadowVisible: false,
            headerLeft: ((props) => <BackButton {...props} />),
            headerStyle: {
              backgroundColor: 'transparent',
            }
          })}/>
          <Stack.Screen 
          name="OldUserPassword"
          component={OldUserPasswordScreen} 
          options={({route}) => ({
            title: route.params.title,
            title: '  Login',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
              color: '#003034'
            },
            headerShadowVisible: false,
            headerLeft: ((props) => <BackButton {...props} />),
            headerStyle: {
              backgroundColor: 'transparent',
            }
          })}/>

          <Stack.Screen 
          name="Help" 
          component={HelpScreen} 
          options={({route}) => ({
            title: route.params.title,
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
              color: '#003034'
            },
            headerShadowVisible: false,
            headerLeft: ((props) => <BackButton {...props} />),
            headerStyle: {
              backgroundColor: 'transparent',
            }
          })}/>
        <Stack.Screen
          name="Address"
          component={AddressScreen} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002f34'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


