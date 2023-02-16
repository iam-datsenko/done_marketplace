import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import Text from "./Text";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 50,

    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
