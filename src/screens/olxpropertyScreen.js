import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

function OlxpropertyScreen({navigation}) {
    return (
    <View>
        <ScrollView>
        <View style={styles.headerMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/olx-small.png")} style={{height: 20, width: 40}}/>
                </TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmotors-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxproperty')}><Image source={require("../assets/olxproperty-info.png")}/></TouchableOpacity>
        </View>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            
            <Text>properties</Text>

        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    headerMenu:{
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default OlxpropertyScreen;