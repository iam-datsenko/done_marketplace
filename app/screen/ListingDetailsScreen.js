import { Image } from "react-native-expo-image-cache";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import { ListItem } from "../components/lists";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        preview={{ uri: listing.images[0].thumbnailUrl }}
        style={styles.image}
        tint="light"
        uri={listing.images[0].url}
      />

      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>

          <Text style={styles.price}>${listing.price}</Text>
        </View>

        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />

        <View style={styles.messageContainer}>
          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",

  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  messageContainer: {
    // padding: 15,
  },
});

export default ListingDetailsScreen;
