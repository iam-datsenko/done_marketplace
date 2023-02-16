import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ color = "primary", onPress, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",

    marginVertical: 10,
    borderRadius: 25,
    width: "100%",
    padding: 15,

    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
  },
});

export default AppButton;
