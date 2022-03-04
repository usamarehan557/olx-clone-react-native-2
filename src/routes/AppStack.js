import React from 'react';
import OlxHomeScreen from '../screens/OlxHomeScreen';
import TestScreen from '../screens/TestScreen';
import OlxpropertyScreen from '../screens/olxpropertyScreen';
import OlxMotorsScreen from '../screens/OlxMotorsScreen';
import Olxpropertylocationfilterscreen from '../screens/olxpropertylocationfilterscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeTab'>
            <Stack.Screen 
            name="HomeTab"
            component={HomeTabs} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
            name="Olxproperty"
            component={OlxpropertyScreen} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
            name="Olxmotors"
            component={OlxMotorsScreen} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen
                name="Olxpropertylocationfilter"
                component={Olxpropertylocationfilterscreen} 
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
            name="Test"
            component={TestScreen} 
            options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

export default AppStack;