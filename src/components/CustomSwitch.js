import React, {useState} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
 
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
 
  return (
    <View>
      <View
        style={{
          height: 35,
          width: 120,
          backgroundColor: '#C8DCFF',
          borderRadius: getRoundCorner ? 25 : 0,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
 
            backgroundColor: getSelectionMode == 1 ? selectionColor : '#C8DCFF',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: getSelectionMode == 1 ? 'bold' : '500',
            }}>
            {option1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
 
            backgroundColor: getSelectionMode == 2 ? selectionColor : '#C8DCFF',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: getSelectionMode == 2 ? 'bold' : '500',
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;