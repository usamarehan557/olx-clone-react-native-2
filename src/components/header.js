import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Animated
  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 55;

const Header = ({ animatedValue }) => {
    const insets = useSafeAreaInsets();

    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 0],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: 'lightblue'
        }}>
            <Text>
                hi
            </Text>
            </Animated.View>
        
        // <View style={{
        //     height: headerHeight,
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     zIndex: 10,
        //     backgroundColor: 'lightblue',
        //     }}>
        /* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/olx-small.png")} style={{height: 20, width: 40}}/>
                </TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmotors-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxproperty')}>
                <Image source={require("../assets/olxproperty-info.png")}/>
            </TouchableOpacity>
            </View> */
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
    },
    headerMenu : {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Header;