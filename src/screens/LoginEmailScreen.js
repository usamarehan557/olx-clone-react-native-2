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

import header from '../components/header';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const LoginEmailScreen = ({route, navigation}) => {
  const { title, tagline, subTagline } = route.params;
  const [email, setEmail] = useState();
  const [validation, setValidation] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const [bColor, setBColor] = useState('#003034');
  const [buttonColor, setButtonColor] = useState('#E3E3E3');
  const [buttonTextColor, setButtonTextColor] = useState('#cccccc');



const validate = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (text.length === 0) {
    setErrormsg("Field should not be empty");
    setBColor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
    setValidation(false);
  } else if (reg.test(text) === false) {
    setErrormsg("This email is not valid");
    setValidation(false);
    setBColor('red');
    setButtonColor('#E3E3E3');
    setButtonTextColor('#cccccc');
  } else {
    setErrormsg("");
    setValidation(true);
    setBColor('#003034');
    setButtonColor('#003034');
    setButtonTextColor('white');
    setEmail(text);
  }
}

const onBlur = () => {
  {(errormsg == "Field should not be empty") ?
  (setBColor('red')) : (setBColor('#003034'))}
}
const onFocus = () => {
  setBColor('cyan');
}

const passwordRoute = (email === 'usamarehan557@gmail.com') ? 'OldUserPassword' : 'NewUserPassword';

return (
  <View style={{ 
      flex: 1,
    //   flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-end' 
      }}>


      <ScrollView style={styles.inputView}>
          <Image 
            source={require('../assets/avatar.png')}
            style={{margin: 5, height: 80, width: 80}}
          />
            <Text style={styles.tagline}>
                Enter your email
            </Text>

            <TextInput
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
                style={[styles.InputForm,{ borderColor: bColor}]}
                placeholder="Email"
                onChangeText={(text) => validate(text)}
            />
            <Text
            style={{color: 'red', marginLeft: 20}}>{errormsg}</Text>
      </ScrollView>



    <View style={styles.buttonView}>
        <TouchableOpacity
        disabled={!validation}
        onPress={() => {
          navigation.navigate(passwordRoute, {
            title: '  Login',
            data: email,
            fromEmail: true
          });
        }}
        style={[styles.button,{ backgroundColor: buttonColor}]}>
                <Text style={[styles.buttonText, {color: buttonTextColor}]}>Next</Text>
        </TouchableOpacity>
        {/* <View style={{width: '90%', height: 50, backgroundColor:'red'}}>
          <Button 
            title='Next'
            disabled={!validation}
            color="#003034"
          />
        </View> */}
    </View>
  </View>
);
}


const styles = StyleSheet.create({
  tagline: {
    fontFamily: 'sans-serif',
    fontSize: 23,
    color: '#003034',
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 10
  },
  inputView:{
      width: '100%',
      height: '80%',
      backgroundColor: 'white'
  },
  InputForm: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: Width / 20, //inner padding
    height: 50,
    width: Width / 1.08,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 5
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


export default LoginEmailScreen;