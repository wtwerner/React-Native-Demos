import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>child 1</Text>
            <Text style={styles.textStyle}>child 2</Text>
            <Text style={styles.textStyle}>child 3</Text>
        </View>
    );
};

export default BoxScreen;

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
});
