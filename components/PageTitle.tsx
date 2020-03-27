import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default ({ pageTitle }) => {
  return (
    <View>
      {pageTitle === "Home" ? (
        <Icon name="all-inclusive" size={30} style={styles.icon} />
      ) : (
        <Text style={styles.title}>{pageTitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "red"
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.23,
    textTransform: "uppercase"
  }
});
