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




const PropertyadCard = (props) => {
    const featured = props.featured;
    return (
        <View style={{justifyContent: 'center', marginRight: 15,
        height: 220, width: 175, borderWidth: 1, borderColor:'#f7f7f7', borderRadius: 5}}>

        <View style={{flex: 6, backgroundColor: 'yellow', alignItems: 'center'}}>
            <ImageBackground source={require('../assets/home-olx.jpg')} style={{width: '100%', height: '100%'}}>
            {featured? 
               

               <Text style={{
                   backgroundColor: '#FFCE33',
                   position: 'absolute', borderRadius: 3,
                   top: 10, left: 5, fontWeight: 'bold',
                   fontSize: 10, color: '#003034',padding: 5
                   }}>FEATURED</Text> : null } 
            </ImageBackground>    
        </View>

        <View style={{flex: 4, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: 5}}>

        <View style={{width: '100%', flex: 1, justifyContent: 'center'}}>

            <Text style={{color: '#003034', fontWeight: 'bold', fontSize: 18}}>
                Rs. {props.price}
            </Text>
        </View>
        <View style={{width: '100%', flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#003034',}} numberOfLines={1}>
                {props.name}
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
    )
}

const NewsCard =(props)=>{
    
    return (
        <TouchableOpacity style={{flexDirection: 'row', height: 100, width: '100%', backgroundColor: 'white'}}>
        <View style={{flex: 2}}>
            <Image 
                source={props.pic}
                style={{width: 100, height: 80, borderRadius: 8, margin: 15}}
            />
        </View>

        <View style={{flex: 4}}>

            <View style={{padding: 15,height: 100, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 11}} numberOfLines={3}>
                {props.headline}
                </Text>
                <Text style={{color: '#003034',fontSize: 12}}>{props.date}</Text>
            </View>

        </View>
    </TouchableOpacity>
    )
}

const CarsAdCard = (props) => {
    const featured = props.featured;
    return (
        <TouchableOpacity style={{justifyContent: 'center', marginRight: 15,
        height: 250, width: 175, borderWidth: 1, borderColor:'#f7f7f7', borderRadius: 5}}>

        <View style={{flex: 5, backgroundColor: 'yellow', alignItems: 'center'}}>
            <ImageBackground source={require('../assets/mehran.jpg')} style={{width: '100%', height: '100%'}}>
            {featured? 


            <Text style={{
                backgroundColor: '#FFCE33',
                position: 'absolute', borderRadius: 3,
                top: 10, left: 5, fontWeight: 'bold',
                fontSize: 10, color: '#003034',padding: 5
                }}>FEATURED</Text> 
                
            : null }
            </ImageBackground>    
        </View>

    <View style={{flex: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: 5}}>

<View style={{width: '100%', flex: 1, justifyContent: 'center'}}>

    <Text style={{color: '#003034', fontWeight: 'bold', fontSize: 18}}>
        Rs. {props.price}
        
    </Text>
</View>
<View style={{width: '100%', flex: 1, justifyContent: 'center'}}>
    <Text style={{color: '#003034', fontSize: 12, marginBottom: 2}} numberOfLines={1}>
        {props.name}
    </Text>
    <Text style={{color: '#003034', fontSize: 12}} numberOfLines={1}>
        {props.year} - {props.mileage} Km
    </Text>
</View>

<View style={{width: '100%', flex: 1, flexDirection: 'row'}}>

    <View  style={{flex: 5, justifyContent: 'center'}}>
        <Text numberOfLines={1} style={{fontSize: 10, color: '#003034'}}>
        {props.address}
        </Text>
    </View>

        <View  style={{flex: 2, justifyContent: 'center'}}>
        
            <Text style={{fontSize: 10, letterSpacing: -0.5, marginLeft: 5, color: '#003034'}}>
            {props.date}
            </Text>
        </View>
    </View>

        </View>

    </TouchableOpacity>
    )
}

export {AdCards, PropertyadCard, NewsCard, CarsAdCard };