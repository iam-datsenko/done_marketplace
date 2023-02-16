import { Text } from "react-native";

import defaultStyles from "../config/styles";

const AppText = ({ children, numberOfLines = 1, style }) => {
  return (
    <Text style={[defaultStyles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default AppText;
