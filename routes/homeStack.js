import React from "react";
import { Image } from "react-native";
import { BlurView } from "expo-blur";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: "#9a1500",
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),

          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{
                height: "100%",
              }}
            />
          ),
          headerStyle: {
            height: 80,
          },
        };
      }}
    />
    <Screen
      name="Details"
      component={ReviewDetails}
      options={{
        title: "Review Details",
      }}
    />
  </Navigator>
);

export default HomeStack;
