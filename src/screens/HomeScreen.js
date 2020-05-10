import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Component Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Item"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
