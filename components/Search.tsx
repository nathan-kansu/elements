import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View
} from "react-native";
import { Button, Icon, SearchBar } from "react-native-elements";
import { favoriteAdd } from "../store/actions/favorites";
import api from "../api";

export default () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

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
  const favorites = useSelector(state => state.favorites);

  const handleFavoriteToggle = id => {
    dispatch(favoriteAdd(id));
  };

  const isFavorite = id => favorites.includes(id);

  const styles = StyleSheet.create({
    favorite: {
      backgroundColor: "transparent"
    },
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
          {results.map(({ id, urls }) => (
            <View key={id}>
              <Image
                source={{
                  uri: urls.regular
                }}
                style={styles.image}
              />
              <Button
                buttonStyle={styles.favorite}
                onPress={() => handleFavoriteToggle(id)}
                icon={
                  <Icon
                    name={isFavorite(id) ? "favorite" : "favorite-border"}
                  />
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {/* </Container> */}
    </View>
  );
};
