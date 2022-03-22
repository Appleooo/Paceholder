import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationBar from './components/navigation/BottomNavigationBar';
import LoginScreen from "./screens/LoginScreen";

import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
    // <NavigationContainer  >
    //   <BottomNavigationBar />
    // </NavigationContainer>

  );
}

export default App;