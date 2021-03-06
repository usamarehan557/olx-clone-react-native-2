import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Categoryball = (props) => {

    const bgColor = props.color || 'cyan';
    const iUrl = props.iconUrl;
    return (
        <TouchableOpacity 
            style={{marginLeft: 12, marginRight: 15}}

        >
        <View style={{
            backgroundColor: bgColor,
            justifyContent:'center',
            alignItems: 'center',
            flex: 3,
            // height: 60, 
            width: 60,
            borderRadius: 45,
            // marginVertical: 5
            }}>
            <Image 
                source={iUrl}
                style={{height: 25, width: 25}}
            />

        </View>
        <View style={{
            justifyContent:'center',
            alignItems: 'center',
            flex: 2,
            width: 60,
        }}>
            <Text
            numberOfLines={2}
            style={{
                color: '#003034',
                textAlign: 'center',
                fontSize: 12}}>{props.name}</Text>
        </View>
    </TouchableOpacity>
    );
}

// export default Categoryball;


const Categorycapsule = (props) => {
    return (
        <View style={{justifyContent: 'center', marginHorizontal: 5,
            backgroundColor: props.color , height: 30, width: 90, borderRadius: 20, alignItems: 'center'}}>
            <Text style={{color: props.textcolor}}>{props.name}</Text>
        </View>
    );

}


const PropertyCategoryCards = (props) => {
    return (
            <TouchableOpacity 
                style={{borderRadius: 5, justifyContent: 'center', alignItems: 'center',
                    borderColor: '#e7e7e7', borderWidth: 1, height: 70, width: 95}}>
                        <Text style={{color: '#003034'}}>
                            {props.title}
                        </Text>
                        <Text style={{fontSize: 12}}>
                            {props.subtitle}
                        </Text>
            </TouchableOpacity>
    )
}

const MotorsMakeCard = (props) => {
    return (
        <TouchableOpacity 
        style={{borderRadius: 5, justifyContent: 'center', alignItems: 'center',
            borderColor: '#e7e7e7', borderWidth: 1, height: 70, width: 70}}>
                <Image source={props.logo}
                style={{height: props.height, width: props.width}}/>
                
                <Text style={{fontSize: 12}}>
                    {props.name}
                </Text>
        </TouchableOpacity>
    )
}
export {Categoryball, Categorycapsule, PropertyCategoryCards, MotorsMakeCard};