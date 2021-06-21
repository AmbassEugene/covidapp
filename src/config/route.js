import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';
import {StateScreen} from '../screens/StateScreen/StateScreen';

const Stack = createStackNavigator();

export const Routes = ({colorScheme}) => {
  return (
    <NavigationContainer
    // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="state" component={StateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
