import React, {useState} from 'react';
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
import CountryPicker from 'react-native-country-picker-modal';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const LoginPhoneScreen = ({route, navigation}) => {
  const { title, tagline, subTagline } = route.params;
  const [phoneNo, setPhoneNo] = useState('');
  const [validation, setValidation] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const [bordercolor, setBordercolor] = useState('#003034');
  const [buttonColor, setButtonColor] = useState('#E3E3E3');
  const [buttonTextColor, setButtonTextColor] = useState('#cccccc');
  const [countryCode, setCountryCode] = useState('PK');
  const [callingCode, setCallingCode] = useState('92');


const validate = (text) => {
  let reg = /^([0-9]{10,11})+$/;
  if (text.length === 0) {
    setErrormsg("Field should not be empty");
    setBordercolor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
    setValidation(false);
  } else if (reg.test(text) === false) {
    setErrormsg("This phone number is not valid");
    setValidation(false);
    setBordercolor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
  } else {
    setErrormsg("");
    setValidation(true);
    setBordercolor('cyan');
    setButtonColor('#003034');
    setButtonTextColor('white');
    setPhoneNo(text);
  }
}

const onBlur = () => {
  {(errormsg == "Field should not be empty") ?
  (setBordercolor('red')) : (setBordercolor('#003034'))}
}
const onFocus = () => {
    setBordercolor('cyan');
}

const passwordRoute = (phoneNo === '3311069907') ? 'OldUserPassword' : 'NewUserPassword';



return (
  <View style={{ 
      flex: 1,
    //   flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end' 
      }}>


      <ScrollView style={styles.scrollView}>
          <Image 
            source={require('../assets/avatar.png')}
            style={{margin: 5, height: 80, width: 80}}
          />
            <Text style={styles.tagline}>
                Enter your phone
            </Text>
            <Text style={styles.subtagline}>
                We will send a confirmation code to your phone
            </Text>

            <View style={[styles.inputView, {borderColor: bordercolor,}]}>
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
                      console.log(callingCode[0]);
                  }}
                  containerButtonStyle={{
                      marginTop: 9,
                  }}
              />
                <View style={styles.verticleLine}></View>
                <TextInput
                    onBlur={() => onBlur()}
                    onFocus={() => onFocus()}
                    keyboardType={'phone-pad'}
                    maxLength={14}
                    style={styles.InputForm}
                    placeholder="Phone Number"
                    onChangeText={(text) => validate(text)}
                />
            </View>
            <Text
            style={{color: 'red', marginLeft: 20}}>{errormsg}</Text>
      </ScrollView>



    <View style={styles.buttonView}>
        <TouchableOpacity
        disabled={!validation}
        onPress={() => {
          navigation.navigate(passwordRoute, {
            title: '  Login',
            data: "+" + callingCode + phoneNo,
            fromEmail: false
          });
        }}
        // onPress={() => console.log(passwordRoute)}
        style={[styles.button,{ backgroundColor: buttonColor}]}>
                <Text style={[styles.buttonText, {color: buttonTextColor}]}>Next</Text>
        </TouchableOpacity>
    </View>
  </View>
);
}


const styles = StyleSheet.create({
  tagline: {
    fontSize: 23,
    color: '#003034',
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10
  },
  subtagline:{
    marginLeft: 15,
    marginTop: 10
  },
  scrollView:{
      width: '100%',
      height: '80%',
      backgroundColor: 'white'
  },
  inputView: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    marginLeft: 15,
    marginTop: 20,
    paddingLeft: 10
  },
  flag: {
    backgroundColor: 'green',
    alignSelf: 'center',
    color: 'white'
    // marginTop: 20,
    // marginBottom: 5
  },
  verticleLine: {
    height: '50%',
    width: 2,
    backgroundColor: '#909090',
    alignSelf: 'center',
    // marginTop: 20,
    // marginBottom: 5,
    marginHorizontal: 10,
  },
  InputForm: {
    // height: 50,
    width: "80%",
    alignSelf: 'center',
    // marginTop: 5,
    // marginBottom: 5
  },
  button: {
    // backgroundColor: '#003034',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 55,
    width: Width / 1.08,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonView: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center'
},
})


export default LoginPhoneScreen;