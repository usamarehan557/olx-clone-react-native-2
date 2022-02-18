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


function LoginMainScreen({navigation}) {
    return (
      <View style={{ 
          flex: 1,
        //   flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'flex-end' 
          }}>


          <ScrollView style={styles.inputView}>
            <Image 
                source={require('../assets/close.png')}
                style={{height: 20, width: 20, margin: 10}}
              />
              <Image 
                source={require('../assets/olx.png')}
                style={{margin: 5, alignSelf: 'center', height: 50, width: 100}}
              />
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: '#001115'}}>
                    Welcome to OLX
                </Text>

                <TextInput 
                    style={styles.input}
                />
          </ScrollView>



        <View style={styles.buttonView}>
            <Button 
                title='press'
                onPress={() => navigation.navigate('LoginEmail')}
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


export default LoginMainScreen;