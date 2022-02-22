import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../redux/counter';
import { login, logout} from '../redux/loginState';

function TestScreen(props) {
    const { count } = useSelector((state) => state.counter);
    const { LoginState } = useSelector((state) => state.LoginState);
    // const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    console.log(LoginState);
    return (
        <View style={{backgroundColor: 'white'}}>

            <Text>Test   Screen</Text>

            <Text>The count is : {count}</Text>

            <Button 
                title='increment'
                onPress={() => dispatch(increment())}
            />
            <Button 
                title='decrement'
                onPress={() => dispatch(decrement())}
            />

            {LoginState ? <Text>true</Text> : <Text>false</Text>}
            

            <Button 
                title='login'
                onPress={() => dispatch(login())}
            />
            <Button 
                title='logout'
                onPress={() => dispatch(logout())}
            />

        </View>
    );
}

export default TestScreen;