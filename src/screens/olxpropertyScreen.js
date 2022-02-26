import React , {useRef, useState, useCallback} from 'react';
import { 
    View, TextInput,
    Dimensions,
    Button,
    TouchableOpacity, ScrollView,
    Image,
    Text,
    StyleSheet, Animated, SafeAreaView, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomSwitch from '../components/CustomSwitch';
import Modal from "react-native-modal";
import Slider from 'rn-range-slider';
import Thumb from '../components/Slider/Thumb';
import Rail from '../components/Slider/Rail';
import RailSelected from '../components/Slider/RailSelected';
import Notch from '../components/Slider/Notch';
import Label from '../components/Slider/Label';
import {Categorycapsule} from '../components/categoryball';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


function OlxpropertyScreen({navigation}) {

    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(250);
  
    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
      setLow(low);
      console.log(low, high);
      setHigh(high);
    }, []);




    const [scrollEnabled, setScrollEnabled] = useState(false)


    const enableScroll = () => setScrollEnabled(true);
    const disableScroll = () => setScrollEnabled(false);

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
                        style={{height: 380, width: '100%'}}>

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
                                    <Text style={{width: 60, marginLeft: 2, color: '#003034',}} numberOfLines={1}>Rawalpindi</Text>

                                </TouchableOpacity>

                            </View>

                            <View style={{height: 40, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View 
                                    style={{borderWidth: 1, width: '45%', flexDirection: 'row', alignItems: 'center',
                                        borderRadius: 5, backgroundColor: 'white'}}>
                                    <Image source={require('../assets/scale.png')} style={{height: 20, width: 20, marginLeft: 5}}/>
                                    <TextInput 
                                        keyboardType='numeric'
                                        placeholder='Min'
                                        onChangeText={(text) => console.log(text)}
                                        style={{width: '80%'}}
                                        value={low === 0 ? '' : low.toString()}
                                        />
                                </View>
                                
                                <View 
                                    style={{borderWidth: 1, width: '45%', flexDirection: 'row', alignItems: 'center',
                                        borderRadius: 5, backgroundColor: 'white'}}>
                                    <Image source={require('../assets/scale.png')} style={{height: 20, width: 20, marginLeft: 5}}/>
                                    <TextInput 
                                        keyboardType='numeric'
                                        placeholder='Max'
                                        onChangeText={(text) => console.log(text)}
                                        style={{width: '80%'}}
                                        value={high === 250 ? '' :high.toString()}/>
                                </View>

                            </View>

                            <View style={{width: '100%', marginVertical: 15}}>

                                <Slider
                                    style={styles.slider}
                                    min={0}
                                    max={250}
                                    step={1}
                                    disableRange={false}
                                    floatingLabel={false}
                                    renderThumb={renderThumb}
                                    renderRail={renderRail}
                                    renderRailSelected={renderRailSelected}
                                    // renderLabel={renderLabel}
                                    // renderNotch={renderNotch}
                                    onValueChanged={handleValueChange}
                                />

                            </View>

                            <TouchableOpacity 
                                style={{borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                    width: '100%', marginVertical: 10, backgroundColor: '#3C77FF', height: 40}}>
                                    <Image source={require('../assets/find-white.png')}
                                     style={{height: 18, width: 18}}/>
                                     <Text style={{color:'white', marginLeft: 5}}>SEARCH</Text>

                            </TouchableOpacity>





                        </View>
                    </ImageBackground>

                    <View style={{width: '100%', flexDirection: 'row', backgroundColor: 'white', height: 40}}>
                        <Text 
                            style={{ fontWeight: 'bold', marginLeft: 15, color: '#003034', alignSelf: 'flex-end'}}>
                                Browse by categories</Text>
                    </View>

                    <ScrollView 
                    style={{backgroundColor: 'white', paddingLeft: 20}} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}>

                            <Categorycapsule 
                            color={'#003034'}
                            name={'Popular'} />

                            <Categorycapsule 
                            color={'#003034'}
                            name={'Popular'} />


                    </ScrollView>

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