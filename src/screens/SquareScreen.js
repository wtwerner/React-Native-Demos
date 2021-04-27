import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch (color) {
            case "red":
                red + change > 255 || red + change < 0
                    ? null
                    : setRed(red + change);
            case "green":
                green + change > 255 || green + change < 0
                    ? null
                    : setGreen(green + change);
            case "blue":
                blue + change > 255 || blue + change < 0
                    ? null
                    : setBlue(blue + change);
            default:
                return;
        }
    };

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                onIncrease={() => setColor("red", COLOR_INCREMENT)}
                onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor("green", COLOR_INCREMENT)}
                onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => setColor("blue", COLOR_INCREMENT)}
                onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}
            />
        </View>
    );
};

export default SquareScreen;

const styles = StyleSheet.create({});
