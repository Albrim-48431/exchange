import React from 'react';
import Store from './Store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={Store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
