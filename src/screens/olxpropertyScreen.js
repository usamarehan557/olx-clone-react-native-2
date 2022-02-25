import React , {useRef, useState} from 'react';
import { View, Dimensions, Button, TouchableOpacity, Image, Text, StyleSheet, Animated, SafeAreaView, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomSwitch from '../components/CustomSwitch';
import Modal from "react-native-modal";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


function OlxpropertyScreen({navigation}) {
    const [isModaloneVisible, setModaloneVisible] = useState(false);

    const toggleModalone = () => {
        setModaloneVisible(!isModaloneVisible);
    };

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const onSelectSwitch = index => {
        console.log(index);
      };
    
    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0;
    const maxHeaderHeight = 60;
    const headerHeight = scrollPosition.interpolate({
        inputRange: [0, 100],
        outputRange: [maxHeaderHeight, minHeaderHeight],
        extrapolate: 'clamp',
    });
    return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>


        {/* category modal - one */}

        <Modal 
            isVisible={isModaloneVisible}
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight / 2}
            onBackdropPress={() => setModaloneVisible(false)}
            swipeDirection={['up', 'left', 'right', 'down']}
            style={{justifyContent: 'flex-end', margin: 0,}}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.3}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            coverScreen={true}>

                <View style={{ height: deviceHeight / 2}}>
                    <View style={{padding: 15,backgroundColor: 'white', flex: 1 , borderTopEndRadius: 15, borderTopStartRadius: 15}}>
                        <Text style={{color: '#000', fontWeight: 'bold', marginBottom: 5}}>Property Types</Text>
                        <Text style={{color: '#003034', marginVertical: 13}}>Land and Plots</Text>
                        <Text style={{color: '#003034', marginVertical: 13}}>Houses</Text>
                        <Text style={{color: '#003034', marginVertical: 13}}>Apartment and Flats</Text>
                        <Text style={{color: '#003034', marginVertical: 13}}>Shops - Offices - Commercial Space</Text>
                        <Text style={{color: '#003034', marginVertical: 13}}>Portion & Floors</Text>
                    </View>
                </View>

        </Modal>

     
        <Animated.View style={[styles.headerMenu, {height: headerHeight}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require("../assets/olx-small.png")} style={{height: 20, width: 40}}/>
                </TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmotors-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxproperty')}><Image source={require("../assets/olxproperty-info.png")}/></TouchableOpacity>
        </Animated.View> 

        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                {useNativeDriver: false},
              )}
            contentInsetAdjustmentBehavior="automatic">


                <View>
                    <ImageBackground source={require('../assets/property-banner.jpg')}
                        style={{height: 350, width: '100%'}}>

                        <View style={{margin: 20}}>
                            <View>
                                <CustomSwitch
                                    selectionMode={1}
                                    roundCorner={true}
                                    option1={'Sale'}
                                    option2={'Rent'}
                                    onSelectSwitch={onSelectSwitch}
                                    selectionColor={'#E1EAFD'}
                                />
                            </View>
                            <TouchableOpacity
                            onPress={toggleModalone}
                            style={{borderWidth: 1,
                                flexDirection: 'row', marginVertical: 10,
                                height: 40, backgroundColor: 'white',
                                alignItems: 'center',
                                borderRadius: 5}}>
                                <Image source={require('../assets/building.png')} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft: 10}}>Land & Plots</Text>
                                <Image source={require('../assets/downarrow.png')}
                                    style={{height: 7, position: 'absolute', right: 10,
                                            width: 12, marginLeft: 10}}/>
                            </TouchableOpacity>

                            <View style={{borderWidth: 1,
                                flexDirection: 'row', marginVertical: 10,
                                height: 40, backgroundColor: 'white',
                                alignItems: 'center',
                                borderRadius: 5}}>

                                <TouchableOpacity
                                style={{width: '65%', height: '100%', alignItems: 'center',
                                            flexDirection: 'row'}}
                                onPress={() => {
                                    navigation.navigate('Olxpropertylocationfilter', {
                                      findCity: false,
                                    });
                                  }}>
                                      <Image source={require('../assets/find.png')}
                                      style={{width: 15, height: 15, marginLeft: 10}}/>
                                    <Text style={{marginLeft: 10}}>Location</Text>

                                </TouchableOpacity>

                                <View style={{width: 1, height: '60%', backgroundColor: '#E7E7E7'}}></View>

                                <TouchableOpacity
                                style={{width: '30%', height: '100%', alignItems: 'center',
                                            flexDirection: 'row'}}
                                onPress={() => {
                                    navigation.navigate('Olxpropertylocationfilter', {
                                      findCity: true,
                                    });
                                  }}>
                                      <Image source={require('../assets/locationgrey.png')}
                                      style={{width: 20, height: 20, marginLeft: 5}}/>
                                    <Text style={{marginLeft: 2, color: '#003034'}}>Rawalpindi</Text>

                                </TouchableOpacity>

                            </View>


                        </View>
                    </ImageBackground>

                </View>
            <Animated.Text>1</Animated.Text>
            <Animated.Text>2</Animated.Text>
            <Animated.Text>3</Animated.Text>
            <Animated.Text>5</Animated.Text>
            <Animated.Text>4</Animated.Text>
            <Animated.Text>6</Animated.Text>
            <Animated.Text>7</Animated.Text>
            <Animated.Text>8</Animated.Text>
            <Animated.Text>9</Animated.Text>
            <Animated.Text>10</Animated.Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>
            <Text>properties</Text>

        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    headerMenu:{
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
})

export default OlxpropertyScreen;