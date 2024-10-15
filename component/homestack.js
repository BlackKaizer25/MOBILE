import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../component/home';
import BarangayDamilag from '../component/BarangayDamilagInfo';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#000', // Change this if needed
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BarangayDamilag"
        component={BarangayDamilag}
        options={{ headerTitle: 'Barangay Damilag' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;