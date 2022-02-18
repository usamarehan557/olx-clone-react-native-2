import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

function header(props) {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: 'tomato'
    }
})

export default header;