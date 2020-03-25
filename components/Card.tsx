import React from "react";
import { Image, Text, View } from "react-native";
import { Card } from "react-native-elements";

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export default () => (
  <Card title="CARD WITH DIVIDER">
    {users.map((u, i) => {
      return (
        <View key={i}>
          <Image
            // style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text>{u.name}</Text>
        </View>
      );
    })}
  </Card>
);
