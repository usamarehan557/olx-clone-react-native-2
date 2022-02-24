import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Modal, TextInput,} from 'react-native';
import React, {useState} from 'react';


function LocationModal(props) {
    const [locationmodalVisible, setLocationmodalVisible] = useState(false);
    return (
        
        <Modal
        animationType="slide"
        transparent={false}
        visible={props.show}
        onRequestClose={() => {
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
    );
}

export default LocationModal;