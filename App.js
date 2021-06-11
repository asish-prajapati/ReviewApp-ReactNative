import React, { useState } from "react";
import Home from "./screens/Home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { AppNavigator } from "./routes/homeStack";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
