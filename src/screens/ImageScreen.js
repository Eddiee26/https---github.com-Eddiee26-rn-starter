import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Component/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <View style={styles.space}></View>
      
      <ImageDetail title="Forest" imageSource={require("../../assets/images/forest.jpg")} score={9}/>
      <ImageDetail title="Mountain" imageSource={require("../../assets/images/mountain.jpg")}score={7} />
      <ImageDetail title="Beach" imageSource={require("../../assets/images/beach.jpg")}score={10}/>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    height: 10,
    width: 10,
  },
});

export default ImageScreen;
