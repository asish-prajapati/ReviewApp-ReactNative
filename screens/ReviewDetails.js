import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating : </Text>
          <View style={styles.heart}>
            {Array(rating)
              .fill()
              .map((item, index) => (
                <Image source={require("../assets/rating-1.png")} key={index} />
              ))}
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  heart: {
    flexDirection: "row",
  },
});
