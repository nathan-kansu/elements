import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import Container from "./Container";
import api from "../api";

const Favorites = ({ favoriteIds }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, [favoriteIds]);

  const fetchFavorites = async () => {
    const requests = favoriteIds.map(id => api.get(`photos/${id}`));

    Promise.all(requests)
      .then(responses => responses.map(({ data }) => data))
      .then(favorites => setFavorites(favorites));
  };

  return (
    <ScrollView>
      <Container>
        {favorites.map(({ description, id, urls, user }) => (
          <ListItem
            key={id}
            leftAvatar={{ source: { uri: urls.regular } }}
            title={description || "lorem"}
            subtitle={user.name}
            bottomDivider
          />
        ))}
      </Container>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  favoriteIds: state.favorites
});

const VisibleTodoList = connect(mapStateToProps, null)(Favorites);
export default VisibleTodoList;
