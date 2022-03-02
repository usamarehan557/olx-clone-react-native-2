import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Modal, TextInput,} from 'react-native';

import {Categoryball} from '../components/categoryball';
import {AdCards} from '../components/AdCards';


function HomeScreen({navigation}) {
    const [locationmodalVisible, setLocationmodalVisible] = useState(false);
    const [itemsmodalVisible, setItemsmodalVisible] = useState(false);
    const [featured, setFeatured] = useState(false);


return (

<View>
    <Modal
        animationType="slide"
        transparent={false}
        visible={locationmodalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setLocationmodalVisible(!locationmodalVisible);
        }}
    >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setLocationmodalVisible(!locationmodalVisible)}>
            <Image source={require('../assets/close.png')} style={{height: 18, width: 18, margin: 20}}/>
        </TouchableOpacity>
        <Text style={{color: '#003034', fontSize: 18, fontWeight: 'bold'}}>Location</Text>
        </View>

        <View style={{height: 55, justifyContent: 'center'}}>
            <View style={{height: '80%', width: '95%', borderColor: 'black', borderWidth: 1, alignItems: 'center',
                            marginLeft: 10, borderRadius: 5, flexDirection: 'row' }}>
                <Image source={require('../assets/find.png')} style={{height: 15, width: 15, marginLeft: 10}}/>
                <TextInput 
                    placeholder='Search area, city or country'
                    style={{width: '65%'}}/>
            </View>
        </View>
        <TouchableOpacity style={{height: 40, alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../assets/point.png')} style={{height: 25, width: 25, marginLeft: 15}}/>
            <Text style={{color: '#4286f4', marginLeft: 5, fontWeight: '700'}}>Use current location</Text>
        </TouchableOpacity>


        <ScrollView>
        <View style={{height: 35, backgroundColor: '#E1E1E1', justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 16, fontWeight: '700', marginLeft: 10}}>Recents</Text>
        </View>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Samanabad, Lahore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Sabzazar, Punjab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Mansoora, Lahore</Text>
        </TouchableOpacity>

        <View style={{height: 35, backgroundColor: '#E1E1E1', justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 16, fontWeight: '700', marginLeft: 10}}>Choose region</Text>
        </View>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#4286f4', fontSize: 13, marginLeft: 5, fontWeight: '700'}}>See all in Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Sindh, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Punjab, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Khyber Pakhtunkhwa, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Azad Kashmir, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Gilgit Baltistan, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Balochistan, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Islamabad Capital Territory, Pakistan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Northern Areas, Pakistan</Text>
        </TouchableOpacity>
        </ScrollView>
    </Modal>
    <Modal
        animationType="slide"
        transparent={false}
        visible={itemsmodalVisible}
        onRequestClose={() => {
          setItemsmodalVisible(!itemsmodalVisible);
        }}
    >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setItemsmodalVisible(!itemsmodalVisible)}>
            <Image source={require('../assets/close.png')} style={{height: 18, width: 18, margin: 20}}/>
        </TouchableOpacity>
        <Text style={{color: '#003034', fontSize: 18, fontWeight: 'bold'}}>Quick Filter</Text>
        </View>

        <View style={{height: 55, justifyContent: 'center'}}>
            <View style={{height: '80%', width: '95%', borderColor: 'black', borderWidth: 1, alignItems: 'center',
                            marginLeft: 10, borderRadius: 5, flexDirection: 'row' }}>
                <Image source={require('../assets/find.png')} style={{height: 15, width: 15, marginLeft: 10}}/>
                <TextInput 
                    placeholder='Find Cars, Mobile Phones and more...'
                    style={{width: '65%'}}/>
            </View>
        </View>

        <ScrollView>
        <View style={{height: 35, backgroundColor: '#E1E1E1', justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 16, fontWeight: '700', marginLeft: 10}}>RECENT SEARCHES</Text>
        </View>
        <TouchableOpacity style={{height: 45, alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../assets/clock.jpg')} style={{width: 25, height: 25, marginLeft: 15}}/>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>alto</Text>
            <Image source={require('../assets/close.png')} style={{width: 14, height: 14, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 45, alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../assets/clock.jpg')} style={{width: 25, height: 25, marginLeft: 15}}/>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Mehran</Text>
            <Image source={require('../assets/close.png')} style={{width: 14, height: 14, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 45, alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../assets/clock.jpg')} style={{width: 25, height: 25, marginLeft: 15}}/>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Samsung</Text>
            <Image source={require('../assets/close.png')} style={{width: 14, height: 14, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>

        <View style={{height: 35, backgroundColor: '#E1E1E1', justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 16, fontWeight: '700', marginLeft: 10}}>POPULAR CATEGORIES</Text>
        </View>
        <TouchableOpacity style={{height: 45, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Mobiles</Text>
            <Image source={require('../assets/forwardarrow.png')} style={{width: 9, height: 15, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 45, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Vehicles</Text>
            <Image source={require('../assets/forwardarrow.png')} style={{width: 9, height: 15, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 45, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Property for Sale</Text>
            <Image source={require('../assets/forwardarrow.png')} style={{width: 9, height: 15, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 45, justifyContent: 'center'}}>
            <Text style={{color: '#003034', fontSize: 13, fontWeight: '700', marginLeft: 10}}>Property for Rent</Text>
            <Image source={require('../assets/forwardarrow.png')} style={{width: 9, height: 15, right: 10, position: 'absolute'}}/>
        </TouchableOpacity>
        </ScrollView>
    </Modal>


    <ScrollView
        style={{}}
        stickyHeaderIndices={[2]}>

        <View style={styles.headerMenu}>
            <TouchableOpacity><Image source={require("../assets/olx-info.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxmotors')}><Image source={require("../assets/olxmotors-dark.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Olxproperty')}><Image source={require("../assets/olxproperty-dark.png")}/></TouchableOpacity>
        </View>
        <View style={styles.locationFilter}>
            <TouchableOpacity style={styles.locationFilter} onPress={() => setLocationmodalVisible(!locationmodalVisible)}>
                <Image source={require("../assets/location.png")} style={{height: 23, width: 18, marginLeft: 20}}/>
                <Text style={{fontSize: 15, marginLeft: 15, color: '#003034'}}>Lahore, Pakistan</Text>
                <Image source={require("../assets/downarrow.png")} style={{height: 7, width: 11.9, marginLeft: '45%'}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.itemFilter}>

            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center', alignItems: 'center'}}>

                <TouchableOpacity style={{ 
                        width: '80%', justifyContent: 'center', flexDirection: 'row',
                        backgroundColor: 'white', height: '60%', alignItems: 'center'
                        }}  onPress={() => setItemsmodalVisible(!itemsmodalVisible)}>

                    <Image 
                        source={require("../assets/find.png")}
                        style={{height: 21, width: 20}}/>

                    <Text 
                        style={{fontSize: 15, marginLeft: 15, color: '#003034'}}>
                            Find Cars, Mobile Phones and more
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        width: '10%',
                        marginLeft: 10,
                        alignItems: 'center'}}>
                    <Image source={require("../assets/bell.jpg")} style={{height: 30, width: 30}}/>
                </TouchableOpacity>
            </View>
            
        </View>

        <View style={styles.categories}>

            <Text style={{fontSize: 14, marginLeft: 15, color: '#003034'}}>Browse Categories</Text>

            <Text 
                style={{
                    fontSize: 13,
                    color: '#003034',
                    fontWeight: '600',
                    textDecorationLine: 'underline',
                    marginLeft: '48%'}}>See all</Text>

        </View>


        <View>
            <ScrollView style={styles.categoryScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Categoryball 
                    color={'#8DF1EE'}
                    iconUrl={require('../assets/smartphone.png')}
                    name={'Mobiles'}
                />
                <Categoryball 
                    color={'#D2B981'}
                    iconUrl={require('../assets/vehicle.jpg')}
                    name={'Vehicles'}
                />
                <Categoryball 
                    color={'#23E6D8'}
                    iconUrl={require('../assets/property-sale.jpg')}
                    name={'Property for Sale'}
                />
                <Categoryball 
                    color={'#F9DD3C'}
                    iconUrl={require('../assets/property-rent.jpg')}
                    name={'Property for Rent'}
                />
                <Categoryball 
                    color={'#9BB9FF'}
                    iconUrl={require('../assets/electronics.jpg')}
                    name={'Electronics & Home Appliances'}
                />
                <Categoryball 
                    color={'#FE645C'}
                    iconUrl={require('../assets/bikes.jpg')}
                    name={'Bikes'}
                />
                <Categoryball 
                    color={'#FEE893'}
                    iconUrl={require('../assets/industry.jpg')}
                    name={'Business, Industrial & Agriculture'}
                />
                <Categoryball 
                    color={'#FE6961'}
                    iconUrl={require('../assets/services.jpg')}
                    name={'Services'}
                />
                <Categoryball 
                    color={'#CEDCFF'}
                    iconUrl={require('../assets/jobs.jpg')}
                    name={'Jobs'}
                />
                <Categoryball 
                    color={'#8DF1EE'}
                    iconUrl={require('../assets/animals.jpg')}
                    name={'Animals'}
                />
                <Categoryball 
                    color={'#D1B981'}
                    iconUrl={require('../assets/furniture.jpg')}
                    name={'Furniture & Home Decor'}
                />
                <Categoryball 
                    color={'#23E6D8'}
                    iconUrl={require('../assets/fashion.jpg')}
                    name={'Fashion & Beauty'}
                />
                <Categoryball 
                    color={'#F9DD3C'}
                    iconUrl={require('../assets/books.jpg')}
                    name={'Books, Sports & Hobbies'}
                />
                <Categoryball 
                    color={'#9BB9FF'}
                    iconUrl={require('../assets/kids.jpg')}
                    name={'Kids'}
                />

            </ScrollView>
        </View>



        <View style={styles.lastSearched}>
            <TouchableOpacity 
            style={{
                borderColor: '#D9D9D9',
                borderWidth: 2,
                height: '90%',
                width: '95%',
                borderRadius: 5,
                alignItems: 'center', flexDirection: 'row'}}>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require("../assets/clock.jpg")} style={{height: 30, width: 30}}/>
                </View>
                <View style={{flex: 6}}>
                    <Text style={{color: '#003034', fontWeight: 'bold', fontSize: 13}}>Continue searching in Mobiles</Text>
                    <Text style={{fontSize: 13}}>All in Multan</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require("../assets/forwardarrow.png")} style={{height: 17, width: 10}}/>
                </View>


            </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <AdCards 
                featured={true}
                pic={require('../assets/mehran.jpg')}
                heading={'Mehran total genuine bumper to bumper'}
                price={950000}
                specs={2010}
                address={'RAJA BAZAR, RAWALPINDI'}
                date={'12 FEB'}
            />

            <AdCards 
                featured={true}
                heading={'test'}
                price={1000}
                specs={2020}
                address={'lahore, pakistan.'}
                date={'20 FEB'}
            />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <AdCards 
                featured={true}
                pic={require('../assets/mehran.jpg')}
                heading={'Mehran total genuine bumper to bumper'}
                price={950000}
                specs={2010}
                address={'RAJA BAZAR, RAWALPINDI'}
                date={'12 FEB'}
            />

            <AdCards 
                featured={true}
                heading={'test'}
                price={1000}
                specs={2020}
                address={'lahore, pakistan.'}
                date={'20 FEB'}
            />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <AdCards 
                featured={false}
                pic={require('../assets/home.jpg')}
                heading={'Home DHA New'}
                price={95000000}
                specs={'5 Marla'}
                address={'DHA, Lahore'}
                date={'20 FEB'}
            />

            <AdCards 
                featured={false}
                heading={'test'}
                price={1000}
                specs={2020}
                address={'lahore, pakistan.'}
                date={'20 FEB'}
            />
        </View>



    </ScrollView>

</View>

);
}

const styles = StyleSheet.create({
    headerMenu:{
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    locationFilter: {
        flexDirection: 'row',
        height: 30,
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: '#f7f7f7'
    },
    itemFilter : {
        height: 60,
        width: '100%',
        backgroundColor: '#f7f7f7'
    },
    categories: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 30
    },
    categoryScroll: {
        height: 100,
        backgroundColor: 'white'
    },
    lastSearched: {
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    }
})

export default HomeScreen;