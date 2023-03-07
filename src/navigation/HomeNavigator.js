import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/Screens/Home';
import FavoriteCurrencies from '~/Screens/FavoriteCurrencies';

const Stack = createNativeStackNavigator();

export const SCREENS = {
  HOME: 'homeScreen',
  FAVORITES: 'favoritesScreen',
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#232526'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        options={{
          title: 'Exchange Rates',
        }}
        name={SCREENS.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Favorites',
          headerBackTitleVisible: false,
        }}
        name={SCREENS.FAVORITES}
        component={FavoriteCurrencies}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
