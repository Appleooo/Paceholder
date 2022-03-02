import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationBar from './components/navigation/BottomNavigationBar';



const App = () => {
  return (
    <NavigationContainer  >
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

export default App;