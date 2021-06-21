import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';
import {StateScreen} from '../screens/StateScreen/StateScreen';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="State" component={StateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
