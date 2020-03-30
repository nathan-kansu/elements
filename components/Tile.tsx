import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import { Button, Icon } from "react-native-elements";

export default ({
  description,
  handleFavoriteToggle,
  id,
  isFavorite,
  user,
  urls
}) => {
  const getImageWidth = () => {
    const { width } = useWindowDimensions();
    return width;
  };

  const imageWidth = getImageWidth();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      borderTopColor: "#333",
      borderTopWidth: 0.1,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      minHeight: 65,
      paddingLeft: 20,
      paddingRight: 20
    },
    description: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 2
    },
    favorite: {
      //   alignSelf: "flex-end"
      backgroundColor: "#eee"
    },
    image: { height: imageWidth, width: imageWidth },
    textContainer: {
      flex: 1
    },
    user: {
      fontSize: 14,
      marginBottom: 3
    },
    title: {
      fontSize: 16
    }
  });
  return (
    <>
      <Image
        source={{
          uri: urls.regular
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            {description || "lorem ipsum yo"}
          </Text>
          <Text style={styles.user}>{user.name}</Text>
        </View>
        <Button
          buttonStyle={styles.favorite}
          onPress={() => handleFavoriteToggle(id)}
          icon={<Icon name={isFavorite ? "favorite" : "favorite-border"} />}
        />
      </View>
    </>
  );
};
