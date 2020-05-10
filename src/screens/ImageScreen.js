import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={require("../../assets/forest.jpg")} />
      <ImageDetail title="Beach" image={require("../../assets/beach.jpg")} />
      <ImageDetail title="Land" image={require("../../assets/mountain.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
