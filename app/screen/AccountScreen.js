import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      backgroundColor: colors.primary,
      name: "format-list-bulleted",
    },
  },
  {
    title: "My Messages",
    icon: {
      backgroundColor: colors.secondary,
      name: "email",
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mariia.jpg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
            />
          )}
        />
      </View>

      <ListItem
        IconComponent={<Icon backgroundColor={colors.yellow} name="logout" />}
        onPress={() => logOut()}
        title="Log Out"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
