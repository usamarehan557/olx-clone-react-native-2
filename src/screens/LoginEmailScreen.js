import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicatorBase,
    Image
} from 'react-native';
import header from '../components/header';


function LoginEmailScreen({navigation}) {
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
                <Text style={{}}>
                    Welcome to OLX
                </Text>

                <TextInput 
                    style={styles.input}
                />
          </ScrollView>



        <View style={styles.buttonView}>
            <Button 
                title='press'
            />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    buttonView: {
        margin: 10,
    },
    inputView:{
        width: '100%',
        height: '80%',
        backgroundColor: 'cyan'
    },

    input: {
        height: 40,
        width: '90%',
        marginVertical: 40,
        borderWidth: 1,
        padding: 10,
    }
})


export default LoginEmailScreen;