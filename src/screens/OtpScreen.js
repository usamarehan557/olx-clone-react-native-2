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
    Image,
    BackHandler,
    Alert
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

var interval;

function OtpScreen({route, navigation}) {
    const { title, data, fromEmail, tagline } = route.params;
    const [placeholder, setPlaceholder] = useState('━');
    const [resend, setResend] = useState(false);
    const [resendColor, setResendColor] = useState('#003034');
    const [timerCount, setTimer] = useState(5);
    const [otpMsg, setOtpMsg] = useState(false);
    const resendOtp = () => {
        setResend(true);
        setResendColor('#cccccc');
        startTimer();
        setTimeout(disbaleforMinute, 5000);
        setOtpMsg(true);
    }
    const disbaleforMinute = () => {
        setResendColor('#003034');
        setResend(false);
        setTimer(5);
    }
    const startTimer = () => {
        interval = setInterval(() => {
        setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval)
        return lastTimerCount - 1
          })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }

    useEffect(() => {
        const backAction = () => {
            clearInterval(interval);
            navigation.goBack();
        };
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
        return () => backHandler.remove();
    }, []);

  

return (
<View style={{ flex: 1,
    alignItems: 'center', justifyContent: 'flex-end'}}>


    <ScrollView style={styles.scrollView}>

        <Text style={styles.tagline}>
            {tagline}
        </Text>
        <Text style={styles.subtagline}>
            Enter the 4-digit code we sent to{'\n'} <Text style={{fontWeight: 'bold'}}>{data}</Text>
        </Text>

        <View style={styles.inputView}>


            <OTPInputView
                style={{width: '85%', height: 50}}
                pinCount={4}
                // placeholderCharacter='-'
                // placeholderTextColor='#003034'
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {() => setPlaceholder('')}
                // autoFocusOnLoad
                codeInputFieldStyle={styles.codeBase}
                codeInputHighlightStyle={styles.codeHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`);
                    navigation.navigate('NewUserPassword', {
                        title: '  Login',
                        data: data,
                        fromEmail: false
                      });
            })}/>

        </View>
        <TouchableOpacity
            onPress={() => resendOtp()}
            disabled={resend}
        >
            {!fromEmail? 
            <Text
                style={[styles.resend, {color: resendColor}]}
                >RESEND CODE BY SMS
            </Text> :
            <Text
                
            style={[styles.resend, {color: resendColor}]}
            // disabled={}
            >RESEND CODE BY EMAIL
            </Text>}
            {resend ? 
            
            <Text style={styles.timerStyle}>(Try again in {timerCount})</Text> 
            
            : <View style={{height: 20}}></View>}

            {!fromEmail? 
            <Text
                style={[styles.resend, {color: resendColor}]}
                >RESEND CODE BY CALL
            </Text> :
            <Text style={[styles.resend, {color: resendColor}]}></Text>
            }

            {resend && !fromEmail ? 
            
            <Text style={styles.timerStyle}>(Try again in {timerCount})</Text> 
            
            : <View style={{height: 20}}></View>}

            {otpMsg && !fromEmail ? 
            
            <Text style={styles.codeMsg}>If you have not recieved the code by SMS,{'\n'}
            Please request 'Resend Code by Call'.
            </Text> 
            
            : <View style={{height: 20}}></View>}


            
        </TouchableOpacity>
            

            

            <View style={{height: Height / 3}}>
                

            </View>

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

    },
    timerStyle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4286f4',
        marginLeft: 30,
    },
    codeMsg:{
        marginTop: 10,
        marginLeft: 30,
        fontSize: 15,
        fontWeight: '500'
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