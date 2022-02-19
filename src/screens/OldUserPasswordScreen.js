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


const OldUserPasswordScreen = ({route, navigation}) => {
  const { title, phone } = route.params;
  const [email, setEmail] = useState();
  const [validation, setValidation] = useState(false);
  const [errormsg, setErrormsg] = useState('');
  const [bordercolor, setBordercolor] = useState('#003034');
  const [buttonColor, setButtonColor] = useState('#E3E3E3');
  const [buttonTextColor, setButtonTextColor] = useState('#cccccc');



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
  }
}

const onBlur = () => {
  {(errormsg == "Field should not be empty") ?
  (setBordercolor('red')) : (setBordercolor('#003034'))}
}
const onFocus = () => {
    setBordercolor('cyan');
}



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
                Enter your password
            </Text>
            <Text style={styles.subtagline}>
                Welcome back <Text style={{fontWeight: 'bold'}}>{phone}</Text>
            </Text>

            <View style={[styles.inputView, {borderColor: bordercolor,}]}>
                
                <TextInput
                    onBlur={() => onBlur()}
                    onFocus={() => onFocus()}
                    maxLength={11}
                    secureTextEntry={true}
                    style={styles.InputForm}
                    placeholder="Password"
                    onChangeText={(text) => console.log(text)}
                />
                <Image 
                    source={require("../assets/eye.png")}
                    style={styles.eye}
                />
            </View>

            
            <Text style={{color: 'red', marginLeft: 20}}>
                {errormsg}
            </Text>

            <Text style={styles.otherAddress}>
                forgot your password?
            </Text>

      </ScrollView>




    <View style={styles.buttonView}>
        <TouchableOpacity
        disabled={!validation}
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
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 20,
    paddingHorizontal: 15
  },
  eye: {
    alignSelf: 'center',
    height: 30, width: 30
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


export default OldUserPasswordScreen;