import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    headerMode="screen"
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "#3fc" },
      headerTintColor: "#9a1500",
    }}
  >
    <Screen name="Home" component={Home} options={{ title: "GameZone" }} />
    <Screen
      name="Details"
      component={ReviewDetails}
      options={{
        title: "Review Details",
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
