import { useState } from "react";
import { FlatList } from "react-native";

import { ListItem } from "../components/lists";
import { ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    image: require("../assets/mosh.jpg"),
    title: "T1",
    description: "D1",
  },
  {
    id: 2,
    image: require("../assets/mosh.jpg"),
    title: "T2",
    description: "D2",
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={<ListItemSeparator />}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("list-item")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              image: require("../assets/mosh.jpg"),
              title: "T2",
              description: "D2",
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
