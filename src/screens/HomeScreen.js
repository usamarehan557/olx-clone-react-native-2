import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Categoryball from '../components/categoryball';



function HomeScreen({navigation}) {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        let items = Array.apply(null, Array(60)).map((v, i) => {
          return {
            id: i,
            src: 'http://placehold.it/200x200?text=' + (i + 1)
          };
        });
        setDataSource(items);
      }, []);

return (

<View>
    <ScrollView
        style={{}}
        stickyHeaderIndices={[2]}>

        <View style={styles.headerMenu}>
            <TouchableOpacity><Image source={require("../assets/olx-info.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmall-dark.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxmotors-dark.png")}/></TouchableOpacity>
            <TouchableOpacity><Image source={require("../assets/olxproperty-dark.png")}/></TouchableOpacity>
        </View>
        <View style={styles.locationFilter}>
            <TouchableOpacity style={styles.locationFilter}>
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
                        }}>

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
        <FlatList
            nestedScrollEnabled
            data={dataSource}
            renderItem={({item}) => (
            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                margin: 1
                }}>
                <Image
                style={styles.imageThumbnail}
                source={{uri: item.src}}
                />
            </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
        />
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
        <View><Text>Hello3</Text></View>
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
        justifyContent: 'center'
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    }
})

export default HomeScreen;