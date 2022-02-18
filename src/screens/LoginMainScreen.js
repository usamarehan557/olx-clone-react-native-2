import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;


function LoginMainScreen({navigation}) {
    return (
      <>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Address')}
          style={{width: '12%'}}>
          <Image
            source={require('../assets/close.png')}
            style={{
              height: 17,
              width: 17,
              margin: 15,
          }}/>
        </TouchableOpacity>
      </View>

      <View style={{ 
          flex: 1,

          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'white'
          }}>
            
          <View>

          <Image 
            source={require('../assets/olx.png')}
            style={{
              marginBottom: Height * 0.03,
              alignSelf: 'center',
              height: Height * 0.065,
              width: Width * 0.25}}/>

              <Text style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#001115',
                letterSpacing: 1,
                marginBottom: Height * 0.01}}>
                  WELCOME TO OLX
              </Text>
              <Text style={{
                marginBottom: Height * 0.02,
                textAlign: 'center',
                fontSize: 17,
                letterSpacing: 1,
                fontWeight: '600',
                color: '#001115'}}>
                The trusted community of buyers {"\n"}and sellers
              </Text>


                <TouchableOpacity
                  style={{marginBottom: 7}}>
                <View style={styles.button}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image 
                          style={styles.buttonIcon}
                          source={require('../assets/google.png')}/>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                      <Text style={styles.buttonText}>Continue with Google</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginBottom: 7}}>
                <View style={styles.button}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image 
                          style={styles.buttonIcon}
                          source={require('../assets/facebook.png')}/>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                      <Text style={styles.buttonText}>Continue with Facebook</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('LoginEmail', {
                      title: 'Login',
                      tagline: 'Enter your email',
                      subTagline: ''
                    });
                  }}
                  style={{marginBottom: 7}}
                >
                <View style={styles.button}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Image 
                          style={styles.buttonIcon}
                          source={require('../assets/envelope.png')}/>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                      <Text style={styles.buttonText}>Continue with Email</Text>
                    </View>
                </View>
                </TouchableOpacity>
              

                <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate('LoginInput', {
                      title: 'Login',
                      tagline: 'Enter your phone',
                      subTagline: 'We will send a confirmation code to your phone.'
                    });
                  }}
                  style={{marginBottom: Height * 0.23}}>
                  <View style={styles.button}>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                          <Image 
                            style={styles.buttonIcon}
                            source={require('../assets/smartphone.png')}/>
                      </View>
                      <View style={{flex: 2, justifyContent: 'center'}}>
                        <Text style={styles.buttonText}>Continue with Phone</Text>
                      </View>
                  </View>
                </TouchableOpacity>

              <Text style={styles.PrivacyPolicy}>
                  If you continue, you are accepting {"\n"}
                  <Text 
                    onPress={() => {
                      navigation.navigate('Help', {
                        title: 'Help',
                      });
                    }}
                    style={{textDecorationLine: 'underline'}}>
                    OLX Terms and Conditions
                  </Text>
                  {" "}and{" "} 
                  <Text
                  onPress={() => {
                    navigation.navigate('Help', {
                      title: 'Privacy Policy',
                    });
                  }}
                  style={{textDecorationLine: 'underline'}}>
                    Privacy Policy
                  </Text>
              </Text>
            </View>
      </View>
      </>
    );
  }


const styles = StyleSheet.create({
    buttonView: {
        margin: 10,
    },
    inputView:{
        width: '100%',
        height: '80%',
    },

    input: {
        height: 40,
        width: '90%',
        marginVertical: 40,
        borderWidth: 1,
        padding: 10,
    },
    PrivacyPolicy: {
      fontSize: 14,
      fontWeight: '500',
      color: '#001115',
      marginBottom: 30,
      textAlign: 'center',
    },
    button: {
      flexDirection: 'row',
      borderColor: '#001115',
      borderRadius: 5,
      borderWidth: 1,
      // paddingRight: 15,
      justifyContent: 'center',
      width:  "100%",
      height: 45,
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#001115',
    },
    buttonIcon: {
      width: 18,
      height: 18,
      marginRight: 20,
      alignSelf: 'flex-end',
    },

})


export default LoginMainScreen;