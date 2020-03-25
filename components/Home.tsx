import React, { useEffect, useState } from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import { Tile } from "react-native-elements";
import axios from "axios";

export default () => {
  const [feed, setFeed] = useState([]);
  const { width, height } = useWindowDimensions();

  const fetchFeed = async () => {
    const { data } = await axios.get("https://reactnative.dev/movies.json");
    const { movies } = data;
    console.log({ width, height });
    setFeed(movies);
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <ScrollView>
      {feed.map(({ id, releaseYear, title }) => (
        <Tile
          caption={releaseYear}
          key={id}
          imageSrc={{ uri: `http://placekitten.com/${width * 2}/${width * 2}` }}
          title={title}
        />
      ))}
    </ScrollView>
  );
};
