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


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const NewUserPasswordScreen = ({route, navigation}) => {
  const { title, data, fromEmail } = route.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidepassword, setHidepassword] = useState(true);
  const [hideconfirmpassword, setHideconfirmpassword] = useState(true);
  const [validation, setValidation] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const [missmatcherror, setMissmatcherror] = useState('');
  const [borderOnecolor, setBorderOnecolor] = useState('#003034');
  const [borderTwocolor, setBorderTwocolor] = useState('#003034');
  const [buttonColor, setButtonColor] = useState('#E3E3E3');
  const [buttonTextColor, setButtonTextColor] = useState('#cccccc');

 const Otproute = fromEmail ? 'Otp' : 'Home';



const validate = (text) => {
  let reg = /^(?=.*[0-9])(?=.*[a-z]).{6,20}$/;
  if (text.length === 0) {
    setErrormsg("Field should not be empty");
    setBorderOnecolor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
    setValidation(false);
  } else if (text.length < 6) {
    setErrormsg("Password is too short. It should be at least 6 character long");
    setBorderOnecolor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
    setValidation(false);
  } else if (reg.test(text) === false) {
    setErrormsg("Password must include a number and a letter");
    setValidation(false);
    setBorderOnecolor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
  } else {
    setErrormsg("");
    setBorderOnecolor('cyan');
    setPassword(text);
  }
}

const match = (text) => {
    if (text.length === 0) {
        setMissmatcherror('Field should not be empty');
        setBorderTwocolor('red');
    } else if(text !== password) {
        setMissmatcherror('Password does not match');
        setBorderTwocolor('red');
    } else {
        setMissmatcherror('');
        setBorderTwocolor('cyan');
        setValidation(true);
        setButtonColor('#003034');
        setButtonTextColor('white');
        setConfirmPassword(text);
    }
}

const onBlurOne = () => {
  {(errormsg == "Field should not be empty") ?
  (setBorderOnecolor('red')) : (setBorderOnecolor('#003034'))}
}
const onFocusOne = () => {
    setBorderOnecolor('cyan');
}

const onBlurTwo = () => {
    {(errormsg == "Field should not be empty") ?
    (setBorderTwocolor('red')) : (setBorderTwocolor('#003034'))}
  }
  const onFocusTwo = () => {
      setBorderTwocolor('cyan');
  }



return (
  <View style={{ 
      flex: 1,
    //   flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end' 
      }}>


      <ScrollView style={styles.scrollView}>
          {/* <Image 
            source={require('../assets/avatar.png')}
            style={{margin: 5, height: 80, width: 80}}
          /> */}
            <Text style={styles.tagline}>
                Create a password
            </Text>
            <Text style={styles.subtagline}>
                You are creating password for <Text style={{fontWeight: 'bold'}}>{data}.</Text>
                {' '}This will help you login faster next time.
            </Text>

            <View style={[styles.inputView, {borderColor: borderOnecolor,}]}>
                
                <TextInput
                    onBlur={() => onBlurOne()}
                    onFocus={() => onFocusOne()}
                    maxLength={20}
                    secureTextEntry={hidepassword}
                    style={styles.InputForm}
                    placeholder="Password"
                    onChangeText={(textOne) => validate(textOne)}
                />
                <TouchableOpacity
                    onPress={() => {hidepassword? setHidepassword(false) : setHidepassword(true)}}
                    style={{justifyContent: 'center', paddingHorizontal: 10}}
                >
                    <Image 
                        source={require("../assets/eye.png")}
                        style={styles.eye}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{color: 'red', marginLeft: 15, fontSize: 13}}>
                {errormsg}
            </Text>

            <View style={[styles.inputView, {borderColor: borderTwocolor,}]}>
                
                <TextInput
                    onBlur={() => onBlurTwo()}
                    onFocus={() => onFocusTwo()}
                    maxLength={20}
                    secureTextEntry={hideconfirmpassword}
                    style={styles.InputForm}
                    placeholder="Confirm new Password"
                    onChangeText={(textTwo) => match(textTwo)}
                />
                <TouchableOpacity
                    onPress={() => {hideconfirmpassword? setHideconfirmpassword(false) : setHideconfirmpassword(true)}}
                    style={{justifyContent: 'center', paddingHorizontal: 10}}
                >
                    <Image 
                        source={require("../assets/eye.png")}
                        style={styles.eye}
                    />
                </TouchableOpacity>
            </View>

            
            <Text style={{color: 'red', marginLeft: 20}}>
                {missmatcherror}
            </Text>

      </ScrollView>




    <View style={styles.buttonView}>
        <TouchableOpacity
        disabled={!validation}
        onPress={() => {
          navigation.navigate(Otproute, {
            title: '  Login',
            data: "data=" + data
          });
        }}
        style={[styles.button,{ backgroundColor: buttonColor}]}>
                <Text style={[styles.buttonText, {color: buttonTextColor}]}>Next</Text>
        </TouchableOpacity>
    </View>
  </View>
);
}


const styles = StyleSheet.create({
  tagline: {
    fontSize: 30,
    color: '#003034',
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10
  },
  subtagline:{
    marginHorizontal: 15,
    marginTop: 10
  },
  scrollView:{
      paddingTop: '10%',
      width: '100%',
      height: '80%',
      backgroundColor: 'white'
  },
  inputView: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 20,
    paddingHorizontal: 15
  },
  eye: {
    alignSelf: 'center',
    height: 22.5, width: 22.5
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
    width: '85%',
    alignSelf: 'center',
    // marginTop: 5,
    // marginBottom: 5
  },
  otherAddress: {
    fontWeight: '700',
    color: '#4286f4',
    marginLeft: 15,
    marginTop: 15
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


export default NewUserPasswordScreen;