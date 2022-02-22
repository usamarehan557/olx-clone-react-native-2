import React, {useState} from 'react';
import {
SafeAreaView,
StatusBar,
View,
Text,
Image,
StyleSheet,
Dimensions,
ScrollView,
ActivityIndicator,
KeyboardAvoidingView,
Platform
} from 'react-native';
import { WebView } from 'react-native-webview';

function errorWindow() {
    return (
        <View  style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Something went wrong</Text>
        </View>
    )
}


function HelpScreen({ route }) {
    const [loading, setLoading] = useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>

			<View style={{flexDirection: "column",height: '100%'}}>
                <View style={{flex: 1 }}>

                    {loading === true ? (
                        <View style={{alignContent: 'center', justifyContent: 'center', height: "100%"}}>
                            <ActivityIndicator style={{alignSelf: 'center'}} weight='500' size="small" color="#003034"/>
                        </View>
                    ) :
                    (
                        <View></View>
                    )}

                    <WebView
                        // onError={(e) => console.log(e)}
                        onLoad={() => setLoading(false)}
                        source={{ uri: 'https://help.olx.com.pk/hc/en-us' }} 
                    />

                    
                </View>   
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
export default HelpScreen;