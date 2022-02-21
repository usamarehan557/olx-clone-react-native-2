import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

function TestScreen(props) {
const [countryCode, setCountryCode] = useState('PK');
const [callingCode, setCallingCode] = useState('92');


    return (
        <View style={{backgroundColor: 'white'}}>

            <Text>Test   Screen</Text>

            <CountryPicker 
                countryCode={countryCode}
                withFlag
                withAlphaFilter={false}
                withCurrencyButton={false}
                withCallingCode
                withCallingCodeButton
                onSelect={country => {
                    console.log('country', country);
                    const {cca2, callingCode} = country;
                    setCountryCode(cca2);
                    setCallingCode(callingCode[0]);
                }}
                containerButtonStyle={{
                    // alignItems: 'center',
                    marginLeft: 10,
                }}
            />
        </View>
    );
}

export default TestScreen;