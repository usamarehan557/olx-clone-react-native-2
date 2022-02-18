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



function LoginEmailScreen({route, navigation}) {
  const { title, tagline, subTagline } = route.params;
  const[email, setEmail] = useState();

  const validate = (text) => {
    console.log(text);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let regem = (/^$/);
    if (reg.test(text) === false) {
        console.log("Email is Not Correct");
        return false;
    }
    if (regem.test(text) === true) {
        console.log("Email field should not be empty");
    } else {
        console.log("Email is Correct");
    }
}


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
            style={{margin: 5}}
          />
            <Text style={styles.tagline}>
                Enter your email
            </Text>

            <TextInput 
                style={styles.InputForm}
                placeholder="Email"
                onChangeText={(text) => validate(text)}
            />
      </ScrollView>



    <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  </View>
);
}


const styles = StyleSheet.create({
  buttonView: {
      width: "100%",
      paddingVertical: 10,
      backgroundColor: 'white'
  },
  inputView:{
      width: '100%',
      height: '80%',
      backgroundColor: 'white'
  },
  InputForm: {
    borderColor: '#003034',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: Width / 20, //inner padding
    height: 50,
    width: Width / 1.08,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 35
  },
  tagline: {
    fontFamily: 'sans-serif',
    fontSize: 23,
    color: '#003034',
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 15
  },
  button: {
    backgroundColor: '#003034',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    width: Width / 1.08,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
})


export default LoginEmailScreen;