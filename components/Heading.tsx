import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Heading({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginBottom: 10
  }
});
