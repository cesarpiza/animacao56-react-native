import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Home from './home'
import Details from './details'

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();

  useEffect(() => {
    StatusBar.setHidden(true);
  }, [])

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen
          name='Home'
          component={Home}
        />
        <Screen
          name='Details'
          component={Details}
        />
      </Navigator>
    </NavigationContainer>
  );
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});