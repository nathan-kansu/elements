import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View
} from "react-native";
import { SearchBar } from "react-native-elements";
import Container from "./Container";
import api from "../api";

export default () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeText = text => {
    setSearchText(text);
  };

  const fetchSearch = async () => {
    const { data } = await api.get("search/photos", {
      params: { query: searchText }
    });

    const { results } = data;
    setResults(results);
  };

  const getTileWidth = () => {
    const { width } = useWindowDimensions();
    return width / 2;
  };

  const tileWidth = getTileWidth();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap"
    },
    image: {
      height: tileWidth,
      width: tileWidth
    }
  });

  return (
    <View>
      {/* <Container> */}
      <SearchBar
        lightTheme={true}
        onChangeText={handleChangeText}
        onSubmitEditing={fetchSearch}
        placeholder="Search for images or collections"
        value={searchText}
      />
      <ScrollView>
        <View style={styles.container}>
          {results.map(({ description, id, urls }) => (
            <View key={id}>
              <Image
                source={{
                  uri: urls.regular
                }}
                style={styles.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {/* </Container> */}
    </View>
  );
};
