import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View source={require("../assets/game_bg.png")} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        color="black"
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
      />
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});
