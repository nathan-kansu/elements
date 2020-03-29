import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { Header } from "react-native-elements";
import PageTitle from "./components/PageTitle";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

export default function App() {
  const [pageTitle, setPageTitle] = useState("Home");

  const handleNavigationChange = ({ index, routes }) => {
    const { name } = routes[index];
    setPageTitle(name);
  };

  const theme = {};

  return (
    <NavigationContainer onStateChange={handleNavigationChange}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header
              centerComponent={<PageTitle pageTitle={pageTitle} />}
              rightComponent={{ icon: "more-vert", color: "#000" }}
              containerStyle={styles.container}
            />
            <Tabs />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomColor: "#333",
    borderBottomWidth: 0.24
  }
});
