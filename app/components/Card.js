import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Text from "./Text";

function Card({ title, price, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
          uri={imageUrl}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",

    marginBottom: 20,
    borderRadius: 15,

    backgroundColor: colors.white,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
