import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationBar from './components/navigation/BottomNavigationBar';
import LoginScreen  from "./screens/LoginScreen";

const App = () => {
  return (
    // <NavigationContainer  >
    //   <BottomNavigationBar />
    // </NavigationContainer>
    <LoginScreen />
  );
}

export default App;