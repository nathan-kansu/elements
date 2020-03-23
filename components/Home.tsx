import React from "react";
import { Tile, Text, Button } from "react-native-elements";

export default ({ navigation }) => (
  <>
    <Tile
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      featured
      imageSrc={{ uri: "http://placekitten.com/200/300" }}
      caption="Some Caption Text"
    />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut similique
      mollitia consequatur laboriosam natus animi, vel aliquid sequi cum
      architecto ratione, commodi expedita dignissimos sed, a consequuntur
      eligendi. Soluta.
    </Text>
    <Button onPress={() => navigation.navigate("Test")} title="Hey!" />
  </>
);
