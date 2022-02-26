import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../redux/counter';
import { login, logout} from '../redux/loginState';
import Slider from 'rn-range-slider';

import Thumb from '../components/Slider/Thumb';
import Rail from '../components/Slider/Rail';
import RailSelected from '../components/Slider/RailSelected';
import Notch from '../components/Slider/Notch';
import Label from '../components/Slider/Label';
import TextButton from '../components/Slider/TextButton';
import styles from '../components/Slider/styles';

function TestScreen(props) {
    const { count } = useSelector((state) => state.counter);
    const { LoginState } = useSelector((state) => state.LoginState);
    // const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();




    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [floatingLabel, setFloatingLabel] = useState(false);
  
    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
      setLow(low);
      setHigh(high);
    }, []);



    const toggleRangeEnabled = useCallback(() => setRangeDisabled(!rangeDisabled), [rangeDisabled]);
    const setMinTo50 = useCallback(() => setMin(50), []);
    const setMinTo0 = useCallback(() => setMin(0), []);
    const setMaxTo100 = useCallback(() => setMax(100), []);
    const setMaxTo500 = useCallback(() => setMax(500), []);
    const toggleFloatingLabel = useCallback(() => setFloatingLabel(!floatingLabel), [floatingLabel]);


    return (
        // <View style={{backgroundColor: 'white'}}>

        //     <Text>The count is : {count}</Text>

        //     <Button 
        //         title='increment'
        //         onPress={() => dispatch(increment())}
        //     />
        //     <Button 
        //         title='decrement'
        //         onPress={() => dispatch(decrement())}
        //     />

        //     {LoginState ? <Text>true</Text> : <Text>false</Text>}
            

        //     <Button 
        //         title='login'
        //         onPress={() => dispatch(login())}
        //     />
        //     <Button 
        //         title='logout'
        //         onPress={() => dispatch(logout())}
        //     />

        // </View>


    <View style={styles.root}>
        <View style={styles.header}>
        <Text style={styles.text}>Range slider demo</Text>
        </View>
    <Slider
      style={styles.slider}
      min={min}
      max={max}
      step={1}
      disableRange={rangeDisabled}
      floatingLabel={floatingLabel}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
    <View style={styles.horizontalContainer}>
      <Text style={styles.valueText}>{low}</Text>
      <Text style={styles.valueText}>{high}</Text>
    </View>
    <View style={styles.horizontalContainer}>
      <TextButton
        text="Toggle floating"
        containerStyle={styles.button}
        onPress={toggleFloatingLabel}
      />
      <TextButton
        text={rangeDisabled ? 'Enable range' : 'Disable range'}
        containerStyle={styles.button}
        onPress={toggleRangeEnabled}
      />
    </View>
    <View style={styles.horizontalContainer}>
      <TextButton
        text="Set min to 0"
        containerStyle={styles.button}
        onPress={setMinTo0}
      />
      <TextButton
        text="Set min to 50"
        containerStyle={styles.button}
        onPress={setMinTo50}
      />
    </View>
    <View style={styles.horizontalContainer}>
      <TextButton
        text="Set max to 100"
        containerStyle={styles.button}
        onPress={setMaxTo100}
      />
      <TextButton
        text="Set max to 500"
        containerStyle={styles.button}
        onPress={setMaxTo500}
      />
    </View>
  </View>


    );
}

export default TestScreen;