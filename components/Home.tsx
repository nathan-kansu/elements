import React, { useEffect, useState } from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import { Tile } from "react-native-elements";
import axios from "axios";
import Container from "./Container";

export default () => {
  const [feed, setFeed] = useState([]);

  const fetchFeed = async () => {
    const { data } = await axios.get("https://reactnative.dev/movies.json");
    const { movies } = data;
    setFeed(movies);
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const getImageWidth = () => {
    const { width } = useWindowDimensions();
    return width * 2;
  };

  const imageWidth = getImageWidth();

  return (
    <ScrollView>
      <Container>
        {feed.map(({ id, releaseYear, title }) => (
          <Tile
            caption={releaseYear}
            key={id}
            imageSrc={{
              uri: `http://placekitten.com/${imageWidth}/${imageWidth}`
            }}
            title={title}
          />
        ))}
      </Container>
    </ScrollView>
  );
};
