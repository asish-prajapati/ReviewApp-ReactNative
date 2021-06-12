import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import About from "../screens/About";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator
    headerMode="screen"
    initialRouteName="About"
    screenOptions={{
      headerStyle: { backgroundColor: "#3fc" },
      headerTintColor: "#9a1500",
    }}
  >
    <Screen
      name="About"
      component={About}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: "100%" }}
            />
          ),
          headerStyle: {
            height: 90,
          },
        };
      }}
    />
  </Navigator>
);

export default AboutStack;
