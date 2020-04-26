import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Bye There!!";
  return (
    <View>
      <Text style={styles.textStyle}> Getting started with React Native</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 20
  }
});

export default ComponentsScreen;
