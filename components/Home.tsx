import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import Tile from "./Tile";
import api from "../services/api";

export default () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const { data } = await api.get("photos/random", { params: { count: 10 } });
    //setFeed(data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {feed.map(props => (
          <Tile key={props.id} {...props} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
