import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { ListItem } from "react-native-elements";
import Container from "./Container";
import Heading from "./Heading";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default () => (
  <View>
    <Container>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))}
    </Container>
  </View>
);
