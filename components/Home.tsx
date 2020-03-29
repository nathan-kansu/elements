import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, SafeAreaView, View, Text } from "react-native";
import Tile from "./Tile";
import { addFavorite } from "../store/actions/favorites";
import api from "../services/api";
import Favourites from "./Favourites";

const Home = ({ handleFavoriteToggle, favorites }) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const { data } = await api.get("photos/random", { params: { count: 10 } });
    setFeed(data);
  };

  return (
    <SafeAreaView>
      <View>
        {favorites.map(favorite => (
          <Text key={favorite}>{favorite}</Text>
        ))}
      </View>
      <ScrollView>
        {feed.map(post => (
          <Tile
            key={post.id}
            handleFavoriteToggle={handleFavoriteToggle}
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
    handleFavoriteToggle: id => {
      dispatch(addFavorite(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(Home);

export default VisibleTodoList;
