import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';

function AdCards(props) {
    const [favorite, setFavorite] = useState(require('../assets/heart.png'));
    const featured = props.featured;

    const addToFavorites = () => {
        if (favorite === (require('../assets/heartfill.png'))) {
            setFavorite(require('../assets/heart.png'));
        } else {
            setFavorite(require('../assets/heartfill.png'));
        }
        
    }

    // const photo = props.pic ? require('../assets/tempsnip.png') : 

    const trim = featured ? '#FFCE33' : 'white';


    return (
        <TouchableOpacity style={{overflow: 'hidden', backgroundColor: 'white', height: 250, width: "45%", borderRadius: 5, marginVertical: 5}}>

        <View style={{
            width: '100%', height: '50%',
            backgroundColor: 'cyan'}}>
        <ImageBackground
            source={props.pic || require('../assets/tempsnip.png')}
            style={{width: '100%', height: '100%', resizeMode: 'cover',
            }}>

            {featured? 
               

            <Text style={{
                backgroundColor: '#FFCE33',
                position: 'absolute', borderRadius: 3,
                bottom: 10, left: 5, fontWeight: 'bold',
                fontSize: 10, color: '#003034',padding: 5
                }}>FEATURED</Text> : null } 

        </ImageBackground>
        

        </View>

            <View style={{
                width: '100%', height: '50%', flexDirection: 'row',
                backgroundColor: 'white'}}>

                {featured ? 
                
                <View style={{
                    width: '4%', height: '100%', marginRight: 10,
                    backgroundColor: '#FFCE33'}}>
                </View> : 
                
                <View style={{
                    width: '2%', height: '100%', marginRight: 10,
                    backgroundColor: 'white'}}>
                </View>}

                

                <View style={{width: '90%'}}>

                    <View style={{width: '100%', flex: 2, flexDirection: 'row', maxHeight: 35}}>

                        <View style={{width: '80%'}}>
                            <Text style={{color: '#003034'}}>
                                {props.heading}
                            </Text>
                        </View>

                        <TouchableOpacity style={{width: '20%',alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => addToFavorites()}
                        >
                            <Image source={favorite} style={{height: 25, width: 25}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '100%', flex: 1, justifyContent: 'center'}}>
                        <Text style={{color: '#003034', fontWeight: 'bold', fontSize: 18}}>
                            Rs. {props.price}
                        </Text>
                    </View>
                    <View style={{width: '100%', flex: 1, justifyContent: 'center'}}>
                        <Text style={{color: '#003034',}}>
                            {props.specs}
                        </Text>
                    </View>
                    <View style={{width: '100%', flex: 1, flexDirection: 'row'}}>
                        <View  style={{flex: 5, justifyContent: 'center'}}>
                            <Text numberOfLines={1} style={{fontSize: 10}}>
                            {props.address}
                            </Text>
                        </View>

                        <View  style={{flex: 2, justifyContent: 'center'}}>
                        
                            <Text style={{fontSize: 10, letterSpacing: -0.5, marginLeft: 5}}>
                            {props.date}
                            </Text>
                        </View>
                    </View>

                </View>




            </View>
            

        

    </TouchableOpacity>
    );
}

export default AdCards;