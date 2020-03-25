import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { Header } from "react-native-elements";

export default function App() {
  const [pageTitle, setPageTitle] = useState("Home");
  const handleStateChange = ({ index, routes }) => {
    const { name } = routes[index];
    setPageTitle(name);
  };

  return (
    <NavigationContainer onStateChange={handleStateChange}>
      <Header
        centerComponent={{ text: pageTitle, style: { color: "#fff" } }}
        rightComponent={{ icon: "menu", color: "#fff" }}
      />
      <Tabs />
    </NavigationContainer>
  );
}
