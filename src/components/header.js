import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default Header;