import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

import Header from '../components/header';



function HomeScreen({navigation}) {
    return (
        <View>
            <ScrollView
                style={{}}
                stickyHeaderIndices={[2]}
            >
                <View><Header /></View>
                <View><Text>Hello2</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
                <View><Text>Hello3</Text></View>
            </ScrollView>

            <Button 
                title='goto Profile'
                onPress={() => navigation.navigate("Test")}
            />
        </View>
    );
}

export default HomeScreen;