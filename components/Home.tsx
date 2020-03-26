import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { Tile } from "react-native-elements";
import api from "../services/api";

export default () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const { data } = await api.get("photos/random", { params: { count: 10 } });
    setFeed(data);
  };

  const getImageWidth = () => {
    const { width } = useWindowDimensions();
    return width * 2;
  };

  const imageWidth = getImageWidth();

  return (
    <SafeAreaView>
      <ScrollView>
        {feed.map(({ description, id, urls }) => (
          <Tile
            caption={description}
            key={id}
            imageSrc={{
              uri: urls.regular
            }}
            title={description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
