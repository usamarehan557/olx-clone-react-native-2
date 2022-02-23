import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Categoryball = (props) => {

    const bgColor = props.color || 'cyan';
    const iUrl = props.iconUrl;
    return (
        <TouchableOpacity 
            style={{marginLeft: 12, marginRight: 15}}

        >
        <View style={{
            backgroundColor: bgColor,
            justifyContent:'center',
            alignItems: 'center',
            flex: 3,
            // height: 60, 
            width: 60,
            borderRadius: 45,
            // marginVertical: 5
            }}>
            <Image 
                source={iUrl}
                style={{height: 25, width: 25}}
            />

        </View>
        <View style={{
            justifyContent:'center',
            alignItems: 'center',
            flex: 2,
            width: 60,
        }}>
            <Text
            numberOfLines={2}
            style={{
                color: '#003034',
                textAlign: 'center',
                fontSize: 12}}>{props.name}</Text>
        </View>
    </TouchableOpacity>
    );
}

export default Categoryball;