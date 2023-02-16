import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import colors from "../config/colors";

function Icon({
  backgroundColor = colors.black,
  iconColor = colors.white,
  name,
  size = 40,
}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",

        borderRadius: size / 2,
        width: size,
        height: size,

        backgroundColor,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
