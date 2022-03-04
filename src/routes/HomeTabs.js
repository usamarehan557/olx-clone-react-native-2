import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OlxHomeScreen from '../screens/OlxHomeScreen';
import OlxAccountScreen from '../screens/OlxAccountScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            // tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                elevation: 0
            }
        }}
    >
      <Tab.Screen 
        name="OlxHome" component={OlxHomeScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
                <View>
                    <Image />
                    <Text></Text>
                </View>
            }
        }}/>

      <Tab.Screen name="OlxAccount" component={OlxAccountScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;