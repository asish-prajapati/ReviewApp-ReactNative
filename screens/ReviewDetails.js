import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";
export default function ReviewDetails({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text style={globalStyles.titleText}>{route.params.rating}</Text>
      <Text style={globalStyles.titleText}>{route.params.body}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
        color="#DB2469"
      />
    </View>
  );
}
