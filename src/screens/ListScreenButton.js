import React from "react";
import { FlatList,View, StyleSheet, Text } from "react-native";

const ListScreen = () => {
  const array = [
    { name: "abc 1", age: 23 },
    { name: "abc 2", age: 33 },
    { name: "abc 3", age: 54 },
    { name: "abc 4", age: 44 },
    { name: "abc 5", age: 35 },
    { name: "abc 6", age: 36 },
    { name: "abc 7", age: 87 },
    { name: "abc 8", age: 28 },
    { name: "abc 9", age: 34 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(arr) => arr.name}
        data={array}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.age}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
