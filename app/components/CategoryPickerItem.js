import { StyleSheet, TouchableOpacity } from "react-native";

import Icon from "./Icon";
import Text from "./Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={75} />

      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    width: "33%",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,

    textAlign: "center",
  },
});

export default CategoryPickerItem;
