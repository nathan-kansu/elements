import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, SafeAreaView, View, Text } from "react-native";
import Tile from "./Tile";
import { favoriteAdd, favoriteRemove } from "../store/actions/favorites";
import api from "../api";

const Home = ({ addFavorite, removeFavorite, favorites }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const { data } = await api.get("photos/random", { params: { count: 10 } });
    setFeed(data);
  };

  const handleFavoriteToggle = (id: string) => {
    return isFavorite(id) ? removeFavorite(id) : addFavorite(id);
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <SafeAreaView>
      <ScrollView>
        {feed.map(post => (
          <Tile
            key={post.id}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite(post.id)}
            {...post}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: id => {
      dispatch(favoriteAdd(id));
    },
    removeFavorite: id => {
      dispatch(favoriteRemove(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(Home);

export default VisibleTodoList;
