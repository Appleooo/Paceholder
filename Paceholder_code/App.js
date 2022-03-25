import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './components/navigation/AuthProvider';
import Route from "./components/navigation/Route";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer  >
        <Route />
      </NavigationContainer>
    </AuthProvider>

  );
}

export default App;