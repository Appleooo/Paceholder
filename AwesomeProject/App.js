import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationBar from './components/navigation/BottomNavigationBar';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

export default App;