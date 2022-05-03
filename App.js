/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import Home from "./src/components/screen/Home";
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
    
  );
};


export default App;