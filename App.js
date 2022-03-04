/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';


import { store, persistor } from './src/redux/store';
import {Provider} from 'react-redux';


import { useSelector } from 'react-redux';

import AppStack from './src/routes/AppStack';
import AuthStack from './src/routes/AuthStack';
import { PersistGate } from 'redux-persist/integration/react';





const AppWrapper = () => {
  // const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App /> 
      </PersistGate>
    </Provider>
  )
}

const App = ({navigation}) => {
  const { LoginState } = useSelector((state) => state.LoginState);

  useEffect(() => 
  // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide(),
  []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!LoginState ? (<AuthStack />) : (<AppStack />)}
      </NavigationContainer>
    </Provider>
  );
}
export default AppWrapper;


