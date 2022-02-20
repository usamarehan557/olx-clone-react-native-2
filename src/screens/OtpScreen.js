import React from 'react';
import {View, Text} from 'react-native';


function OtpScreen({route, navigation}) {
    const { data, tagline, subTagline } = route.params;

    return (
        <View>
            <Text>OTP</Text>
        </View>
    );
}

export default OtpScreen;