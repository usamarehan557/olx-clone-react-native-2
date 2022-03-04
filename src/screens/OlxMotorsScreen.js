import React , {useRef, useState, useCallback} from 'react';
import { 
    View, TextInput,
    Dimensions,
    Button,
    TouchableOpacity, ScrollView,
    Image,
    Text,
    StyleSheet, Animated, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomSwitch from '../components/CustomSwitch';
import Modal from "react-native-modal";
import Slider from 'rn-range-slider';
import Thumb from '../components/Slider/Thumb';
import Rail from '../components/Slider/Rail';
import RailSelected from '../components/Slider/RailSelected';
import Notch from '../components/Slider/Notch';
import Label from '../components/Slider/Label';
import {Categorycapsule, PropertyCategoryCards, MotorsMakeCard} from '../components/categoryball';
import Swiper from 'react-native-swiper';
import { PropertyadCard, NewsCard, CarsAdCard } from '../components/AdCards';



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


function OlxMotorsScreen({navigation}) {

    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100000000);
  
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


    const [isEnabled, setIsEnabled] = useState(false);
    
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


     
        <Animated.View style={[styles.headerMenu, {height: headerHeight}]}>
            <TouchableOpacity onPress={() => navigation.navigate('OlxHome')}>
                <Image source={require("../assets/olx-small.png")} style={{height: 20, width: 40}}/>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Test')}><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxmotors')}><Image source={require("../assets/olxmotors-info.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxproperty')}><Image source={require("../assets/olxproperty-dark.png")}/></TouchableOpacity>
        </Animated.View> 

        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                {useNativeDriver: false},
              )}
            contentInsetAdjustmentBehavior="automatic">


                <View>
                    <View style={{height: 280, width: '100%'}}>
                        <ImageBackground source={require('../assets/motors-banner.jpg')}
                            style={{height: 280, width: '100%'}}>

                            <View style={{margin: 20}}>

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
                                        <Text style={{marginLeft: 10}}>Select your car</Text>

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
                                        <Image source={require('../assets/location.png')}
                                        style={{width: 12, height: 15, marginLeft: 10}}/>
                                        <Text style={{width: 60, marginLeft: 2, color: '#003034',}} numberOfLines={1}>Rawalpindi</Text>

                                    </TouchableOpacity>

                                </View>

                                <View style={{height: 40, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View 
                                        style={{borderWidth: 1, width: '45%', flexDirection: 'row', alignItems: 'center',
                                            borderRadius: 5, backgroundColor: 'white'}}>
                                        <Image source={require('../assets/tag.png')} style={{height: 15, width: 15, marginLeft: 5}}/>
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
                                        <Image source={require('../assets/tag.png')} style={{height: 15, width: 15, marginLeft: 5}}/>
                                        <TextInput 
                                            keyboardType='numeric'
                                            placeholder='Max'
                                            onChangeText={(text) => console.log(text)}
                                            style={{width: '80%'}}
                                            value={high === 100000000 ? '' :high.toString()}/>
                                    </View>

                                </View>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 11}}>PKR 0</Text>
                                    <Text style={{fontSize: 11}}>PKR 10 Crores</Text>
                                </View>

                                <View style={{width: '100%', marginVertical: 15}}>

                                    <Slider
                                        style={styles.slider}
                                        min={0}
                                        max={100000000}
                                        step={100000}
                                        disableRange={false}
                                        floatingLabel={true}
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
                                        width: '100%', marginVertical: 10, backgroundColor: '#E6B92D', height: 40}}>
                                        <Image source={require('../assets/find.png')}
                                        style={{height: 16, width: 16}}/>
                                        <Text style={{color:'#003036', marginLeft: 5, fontSize: 16}}>SEARCH</Text>

                                </TouchableOpacity>





                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{width: '100%', flexDirection: 'row', backgroundColor: 'white', height: 40}}>
                        <Text 
                            style={{ fontWeight: 'bold', marginLeft: 15, color: '#003034', alignSelf: 'flex-end'}}>
                                Browse by categories</Text>
                    </View>

                    <ScrollView 
                    style={{backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 10 , width: deviceWidth}} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}>

                            <Categorycapsule 
                            textcolor={'white'}
                            color={'#003034'}
                            name={'Make'} />

                            <Categorycapsule 
                            textcolor={'#003034'}
                            color={'#E7E7E7'}
                            name={'Model'} />
                            <Categorycapsule 
                            textcolor={'#003034'}
                            color={'#E7E7E7'}
                            name={'City'} />
                            <Categorycapsule 
                            textcolor={'#003034'}
                            color={'#E7E7E7'}
                            name={'Price Range'} />

                            <View style={{width: 30, height: '100%'}}></View>

                    </ScrollView>

                        <View style={{backgroundColor: 'white', height: 240, paddingTop: 10}}>
                            <Swiper
                            style={{}}
                            height={240}
                            onMomentumScrollEnd={(e, state, context) =>
                                console.log('index:', state.index)
                            }
                            dot={
                                <View
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: '#003034',
                                    borderWidth: 1,
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}
                                />
                                }
                                activeDot={
                                    <View
                                    style={{
                                        backgroundColor: '#003034',
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        marginLeft: 3,
                                        marginRight: 3,
                                        marginTop: 3,
                                        marginBottom: 3
                                    }}
                                    />
                                }
                                paginationStyle={{
                                    bottom: 0,
                                    // left: null,
                                    // right: 10
                                }}
                                loop={false}
                                >
                            {/* Slide one */}
                            <View style={{flex: 1}}>
                                <View style={{height: 100,
                                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <MotorsMakeCard name={'Toyota'} logo={require('../assets/toyota.png')} height={40} width={40}/>
                                <MotorsMakeCard name={'Suzuki'} logo={require('../assets/suzuki.png')} height={40} width={40}/>
                                <MotorsMakeCard name={'Honda'} logo={require('../assets/honda.png')} height={30} width={36}/>
                                <MotorsMakeCard name={'BMW'} logo={require('../assets/bmw.png')} height={35} width={35}/>
                                </View>


                                <View style={{height: 90,
                                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>

                                <MotorsMakeCard name={'KIA'} logo={require('../assets/kia.png')} height={30} width={40}/>
                                <MotorsMakeCard name={'Audi'} logo={require('../assets/audi.png')} height={30} width={40}/>
                                <MotorsMakeCard name={'Daihatsu'} logo={require('../assets/daihatsu.png')} height={40} width={40}/>
                                <MotorsMakeCard name={'Nissan'} logo={require('../assets/nissan.png')} height={34} width={40}/>

                                </View>

                            </View>

                            {/* Slide two */}

                            <View style={{flex: 1}}>
                                <View style={{height: 100,
                                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <MotorsMakeCard name={'Mitsubishi'} logo={require('../assets/mitsubishi.png')} height={32} width={35}/>
                                <MotorsMakeCard name={'Hyundai'} logo={require('../assets/hyundai.png')} height={20} width={40}/>
                                <MotorsMakeCard name={'FAW'} logo={require('../assets/faw.png')} height={40} width={40}/>
                                <MotorsMakeCard name={'Changan'} logo={require('../assets/changan.png')} height={40} width={40}/>
                                </View>


                                <View style={{height: 90,
                                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>

                                <MotorsMakeCard name={'Chevrolet'} logo={require('../assets/chevrolet.png')} height={15} width={40}/>
                                <MotorsMakeCard name={'Mercedes'} logo={require('../assets/mercedes.png')} height={35} width={35}/>
                                <MotorsMakeCard name={'Mazda'} logo={require('../assets/mazda.png')} height={28} width={35}/>
                                <MotorsMakeCard name={'Daewoo'} logo={require('../assets/daewoo.png')} height={20} width={40}/>

                                </View>

                            </View>

                            {/* Slide three */}

                            <View style={{flex: 1}}>
                                <View style={{height: 100,
                                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <MotorsMakeCard name={'Isuzu'} logo={require('../assets/isuzu.png')} height={25} width={40}/>
                                <MotorsMakeCard name={'Prince'} logo={require('../assets/regal.png')} height={50} width={50}/>
                                <MotorsMakeCard name={'Subaru'} logo={require('../assets/subaru.png')} height={22} width={40}/>
                                <MotorsMakeCard name={'United'} logo={require('../assets/united.png')} height={25} width={40}/>
                                </View>

                            </View>

                            </Swiper>
                        </View>

{/* Cars ads cards */}

                        <View style={{flexDirection: 'row', backgroundColor: 'white', height: 30, alignItems: 'flex-end'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13, marginLeft: 15, color: '#003034'}}>Featured Used Cars</Text>
                            <Text style={{fontSize: 13, color: '#3C77FF', marginLeft: 170}}>View all</Text>
                        </View>

                        <ScrollView 
                            style={{backgroundColor: 'white', paddingLeft: 15, paddingVertical: 10}} 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}>

                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                            <CarsAdCard featured={true} price={500000} name={'Suzuki Mehran'} year={2012} mileage={100000} address={'Lahore, Punjab'} date={'19 Feb'}/>
                        </ScrollView>

                        {/* Featured Dealers */}

                        <View style={{flexDirection: 'row', backgroundColor: 'white', height: 30, alignItems: 'flex-end'}}>
                            <Text style={{fontWeight: 'bold', marginLeft: 15, color: '#003034'}}>Featured Dealers</Text>
                        </View>


                        <ScrollView 
                            style={{backgroundColor: 'white', paddingLeft: 15, paddingVertical: 10, width: deviceWidth}} 
                            horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/motorpoint.png')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/fortland.jpeg')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/sheikh.png')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/am.png')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/bullet.png')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                                <View style={{borderWidth: 1, borderColor: '#e7e7e7', height: 55, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../assets/carcastle.png')} style={{flex: 1,width: '100%',height: '100%',resizeMode: 'contain'}}/>
                                </View>
                                <View style={{width: 20}}></View>
                        </ScrollView>


                        <View style={{flexDirection: 'row', backgroundColor: 'white', height: 30, alignItems: 'flex-end'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13, marginLeft: 15, color: '#003034'}}>Latest News</Text>
                        </View>

                        <NewsCard 
                            pic={require('../assets/news1.1.jpg')} date={'Mar 02, 2022'}
                            headline={'This blog is for those who have car insurance, have been involved in an accident and are now looking for information'}/>
                        <NewsCard 
                            pic={require('../assets/news1.2.jpg')} date={'Mar 02, 2022'}
                            headline={'Biggest news of the year for all Civic lovers in Pakistan! Honda Civic launch date has been confirmed. It is Friday, March 04, 2022.'}/>
                        <NewsCard 
                            pic={require('../assets/news1.3.jpg')} date={'Mar 02, 2022'}
                            headline={'The last we reported on this much-awaited Chinese SUV was in January, when we told you about its possible launch in Pakistan.'}/>
                        <NewsCard 
                            pic={require('../assets/news1.4.jpg')} date={'Mar 02, 2022'}
                            headline={'In Pakistan, people’s purchasing power has increased. Or at least this is what the economists are claiming.'}/>                        
                </View>
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

export default OlxMotorsScreen;