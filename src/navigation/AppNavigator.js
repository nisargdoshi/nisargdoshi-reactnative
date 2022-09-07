import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../utility/Color'

import SplashScreen from '../features/splash/SplashScreen'
import ProductListScreen from '../features/prodcut/ProductListScreen'
import ProductDetailsScreen from '../features/prodcut/ProductDetailsScreen'
import CreateNewProductScreen from '../features/prodcut/CreateNewProductScreen'
import { navigationRef } from './RootNavigation';



import NavigationHeaders from '../navigation/NavigationHeaders'
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>

        <Stack.Screen
         name={NavigationHeaders.SplashScreen} 
         options={{headerShown:false}}
         component={SplashScreen} />

      <Stack.Screen
         name={NavigationHeaders.ProductDetailsScreen} 
         options=
          {
            {
              title: '',
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTintColor: colors.black,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          }
         component={ProductDetailsScreen} />
         

         <Stack.Screen
         name={NavigationHeaders.CreateNewProductScreen} 
         options=
          {
            {
              title: 'Add New Product',
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTintColor: colors.black,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          }
         component={CreateNewProductScreen} />


      <Stack.Screen
          name={NavigationHeaders.ProductListScreen}
          component={ProductListScreen}
          options=
          {
            {
              title: 'Products',
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTintColor: colors.black,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


