import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  
  const Width = Dimensions.get('screen').width;
  const Height = Dimensions.get('screen').height;

function AddressScreen({navigation}) {
    return (
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} />

            <View style={styles.main}>

                <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'tomato'}}>
                    <Image 
                    style={styles.banner}
                    source={require('../assets/banner.png')}
                    />
                </View>

                <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={styles.tagline}>
                    Where do you want to buy/ {'\n'} sell products?
                </Text>

                <Text style={styles.subTagline}>
                    To enjoy all that OLX has to offer you, we need {'\n'}
                    to know where to look for them.
                </Text>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Image 
                            style={styles.buttonIcon}
                            source={require('../assets/cursor.png')}/>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.buttonText}>Near me</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={styles.otherAddress}>
                    Other Address
                </Text>
                </View>
                <View style={{flex: 1}}>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "column",
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    banner: {
        width: Width,
        height: '100%',
        // aspectRatio: 1,
    },
    tagline: {
        fontFamily: 'sans-serif',
        fontSize: Width / 20,
        color: '#003034',
        // marginTop: Height / 60,
        fontWeight: '900',
        textAlign: 'center'
    },
    subTagline : {
        fontSize: Width / 30,
        color: '#003034',
        // marginTop: Height / 100,
        textAlign: 'center',
        fontWeight: '400'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#003034',
        borderRadius: 5,
        borderWidth: 2,
        paddingRight: Width / 15,
        justifyContent: 'center',
        // marginTop: Height / 30,
        marginBottom: Height / 110,
        // paddingVertical: 10,
        height: Height / 15,
        width: Width / 1.05
      },
      buttonText: {
        fontWeight: 'bold',
        color: '#fff',
      },
      buttonIcon: {
        width: Width / 25,
        height: Height / 50,
        marginRight: Width / 30,
        alignSelf: 'flex-end',
      },
      otherAddress: {
        // marginTop: Height / 70,
        textDecorationLine: 'underline',
        fontWeight: '600',
        color: '#003034'
      }
})
export default AddressScreen;