import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { Header } from "react-native-elements";

export default function App() {
  const [pageTitle, setPageTitle] = useState("Home");

  const handleNavigationChange = ({ index, routes }) => {
    const { name } = routes[index];
    setPageTitle(name);
  };

  const theme = {
    // colors: {
    //   primary: "white"
    // }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white"
    },
    title: {
      color: "black",
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: 1.23,
      textTransform: "uppercase"
    }
  });

  return (
    <NavigationContainer onStateChange={handleNavigationChange}>
      <ThemeProvider theme={theme}>
        <Header
          centerComponent={{ text: pageTitle, style: styles.title }}
          rightComponent={{ icon: "menu", color: "#000" }}
          containerStyle={styles.container}
        />
        <Tabs />
      </ThemeProvider>
    </NavigationContainer>
  );
}
