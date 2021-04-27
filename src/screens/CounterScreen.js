import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase_count':
            return { ...state, count: state.count + action.payload };
        case 'decrease_count':
            return { ...state, count: state.count - action.payload };
        default:
            return;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase_count', payload: INCREMENT })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease_count', payload: INCREMENT })} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

export default CounterScreen;

const styles = StyleSheet.create({});
