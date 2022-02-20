import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Dimensions,
    Image
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


function OtpScreen({route, navigation}) {
    const { title, data, fromEmail } = route.params;
    const [placeholder, setPlaceholder] = useState('━');
    const [resend, setResend] = useState(false);
    const [resendColor, setResendColor] = useState('#003034')


    const Otproute = fromEmail ? 'Otp' : 'Home';
  
  
  
    const resendOtp = () => {
        setResend(true);
        setResendColor('#cccccc');
        setTimeout(disbaleforMinute, 60000)
    }

    const disbaleforMinute = () => {
        setResendColor('#003034');
    }
  
  

return (
<View style={{ flex: 1,
    alignItems: 'center', justifyContent: 'flex-end'}}>


    <ScrollView style={styles.scrollView}>

        <Text style={styles.tagline}>
            Enter your confirmation code
        </Text>
        <Text style={styles.subtagline}>
            Enter the 4-digit code we sent to <Text style={{fontWeight: 'bold'}}>{data}</Text>
        </Text>

        <View style={styles.inputView}>


            <OTPInputView
                style={{width: '85%', height: 50}}
                pinCount={4}
                // placeholderCharacter='-'
                // placeholderTextColor='#003034'
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged = {() => setPlaceholder('')}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.codeBase}
                codeInputHighlightStyle={styles.codeHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
            })}/>

        </View>

                
                <Text
                    onPress={() => resendOtp()}
                    style={[styles.resend, {color: resendColor}]}
                    // disabled={}
                    >
                        RESEND CODE BY EMAIL
                </Text>
    </ScrollView>
</View>
);
}
      
const styles = StyleSheet.create({
    tagline: {
        fontSize: 40,
        color: '#003034',
        fontWeight: '700',
        marginLeft: 25,
        marginTop: 10
    },
    subtagline:{
        fontSize: 16,
        color: '#003034',
        marginLeft: 25,
        marginTop: 10,
    },
    scrollView:{
        paddingTop: '10%',
        width: '100%',
        height: '80%',
        backgroundColor: 'white'
    },
    inputView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 10,
        // backgroundColor: 'red',
        marginVertical: 30
    },
    resend: {
        fontWeight: '700',
        fontSize: 15,
        textDecorationLine: 'underline',
        marginLeft: 30,
        marginTop: 15,
        marginBottom: Height / 3
    },
    codeBase: {
        width: 65,
        height: 65,
        borderWidth: 1,
        borderColor: '#003034',
        color: '#003034',
        fontSize: 25
    },
    codeHighLighted: {
        borderColor: "#03DAC6",
    }
})

export default OtpScreen;