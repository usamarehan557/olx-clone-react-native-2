// import React from 'react';
// import { View, Text, StyleSheet, PixelRatio, Switch } from 'react-native';
// import CountryPicker from 'react-native-country-picker-modal';
// import { CountryCode, Country } from '../components/src/types';

// function TestScreen(props) {

// const [countryCode, setCountryCode] = useState<CountryCode>('FR');
// const [country, setCountry] = useState<Country>(null);
// const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(false);
// const [withFlag, setWithFlag] = useState<boolean>(true);
// const [withEmoji, setWithEmoji] = useState<boolean>(true);
// const [withFilter, setWithFilter] = useState<boolean>(true);
// const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
// const [withCallingCode, setWithCallingCode] = useState<boolean>(false);
// const onSelect = (country) => {
//     setCountryCode(country.cca2)
//     setCountry(country)
// }


//     return (
//         <View>
//             <Text>
//                 TestScreen
//             </Text>
//         </View>
//     );
// }

// export default TestScreen;

import React from 'react';
import { View, Text } from 'react-native';

function TestScreen(props) {
    return (
        <View>

            <Text>Test   Screen</Text>
        </View>
    );
}

export default TestScreen;