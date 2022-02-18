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

function HelpScreen({ route, navigation }) {
    const [loading, setLoading] = useState(true);
    const { title } = route.params;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
			<View
				style={{
				flexDirection: "column",
				height: '100%',
			}}>
                    <View style={{flex: 1 }}>

                        {loading === true ? (
                            <View style={{alignContent: 'center', justifyContent: 'center', height: "100%"}}>
                                <ActivityIndicator style={{alignSelf: 'center'}} size="large" color="#003034"/>
                            </View>
                        ) :
                        (
                            <View></View>
                        )}

                        <WebView
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