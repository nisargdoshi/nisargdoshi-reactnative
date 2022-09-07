/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useEffect } from 'react';
 import { store } from './src/Store'
 import { Provider, co } from 'react-redux'

 import AppNavigator from './src/navigation/AppNavigator'


const App  = () => {
  return (
    <Provider store={store} >
          <AppNavigator />
    </Provider>

  );
};


export default App;
