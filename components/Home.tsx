import React from "react";
import { Button, View, Text } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>Open up App.tsx to start working on your app!</Text>
    <Button title="Go to Test" onPress={() => navigation.navigate("Test")} />
  </View>
);
