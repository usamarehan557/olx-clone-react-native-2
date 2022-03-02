import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function Olxpropertylocationfilterscreen({route, navigation}) {
    const { findCity } = route.params;

    return (
        <View style={{flex: 1}}>
            <View style={{height: 55, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/barrow.png')} style={{height: 18, width: 18, marginLeft: 15}}/>
                </TouchableOpacity>
                <Text style={{color: '#003034', fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>Locations</Text>
            </View>

            <View style={{height: 55, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white'}}>
                <View style={{borderRadius: 5, borderWidth: 1, width: '90%', height: '80%', flexDirection: 'row', alignItems: 'center'}}>
                    <Image  source={require('../assets/find.png')} style={{height: 15, width: 15, marginLeft: 10}}/>
                    <TextInput placeholder= {findCity ? 'Search City...' : 'Search area'} style={{marginLeft: 10, width: '86%'}}/>
                </View>
            </View>
                {!findCity? 
                (
                <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{color: '#4286f4', margin: 10, fontWeight: 'bold', fontSize: 15}}>ALL AREAS</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Samanabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Gulberg</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Defence</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Mughalpura</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Muslim Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Mansoora</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Sabzazar</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Thokar</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Ichra</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Iqbal Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Township</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Model Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Johar Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Faisal Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Green Town</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                </ScrollView>) : (
                <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{color: '#4286f4', margin: 10, fontWeight: 'bold', fontSize: 15}}>POPULAR CITITES</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Rawalpindi</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Lahore</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Islamabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Karachi</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Multan</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Faisalabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Peshawar</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#4286f4', margin: 10, fontWeight: 'bold', fontSize: 15}}>ALL CITITES</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Peshawar</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Faisalabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Multan</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Karachi</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Islamabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Lahore</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Rawalpindi</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                <Text style={{color: '#003034', margin: 10, fontSize: 15}}>Hyderabad</Text>
                <View style={{width: '100%', height: 1, backgroundColor: '#E3E3E3'}}></View>
                </ScrollView>) }
        </View>
    );
}

export default Olxpropertylocationfilterscreen;