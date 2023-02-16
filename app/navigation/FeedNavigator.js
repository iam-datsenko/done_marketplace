import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
