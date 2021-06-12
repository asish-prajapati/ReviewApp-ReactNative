import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "zelda , breath of fresh air ",
      rating: 4,
      body: "lorem impusm goht jadnv ",
      key: "1",
    },
    {
      title: "Gotta Catch the m All (again)",
      rating: 5,
      body: "lorem ipsum hefigaa huntich",
      key: "2",
    },
    {
      title: "not so final fantasy",
      rating: 3,
      body: "koites nothing you terrible",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
