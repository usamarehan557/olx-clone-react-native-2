import React from 'react';
import {
    Image,
    TouchableOpacity
  } from 'react-native';
import LoginEmailScreen from '../screens/LoginEmailScreen';
import LoginMainScreen from '../screens/LoginMainScreen';
import LoginPhoneScreen from '../screens/LoginPhoneScreen';
import AddressScreen from '../screens/AddressScreen';
import HelpScreen from '../screens/HelpScreen';
import OtpScreen from '../screens/OtpScreen';
import OldUserPasswordScreen from '../screens/OldUserPasswordScreen';
import NewUserPasswordScreen from '../screens/NewUserPasswordScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function BackButton() {
    const navigation = useNavigation();
    return(
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
          source={require('../assets/previous.png')}
          style={{ width: 14, height: 14, marginRight: 10 }}
        />
      </TouchableOpacity>
    )
  }

const AuthStack = ({navigation}) => {
    return (
<Stack.Navigator initialRouteName='LoginMain'>
        <Stack.Screen 
            name="LoginMain"
            component={LoginMainScreen}
            options={{
              headerShown: false
            }}/>
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
            options={{
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
            }}/>
            <Stack.Screen 
            name="NewUserPassword"
            component={NewUserPasswordScreen} 
            options={{
              headerShown: false
            }}/>
            <Stack.Screen 
              name="Otp"
              component={OtpScreen} 
              options={{
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
              }}/>
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
            }}/>
        </Stack.Navigator>
    )
}

export default AuthStack;