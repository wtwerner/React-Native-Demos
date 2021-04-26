import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={require("../../assets/beach.jpg")} />
      <Text>{props.title}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
